"use client";

import { createContext, useContext, useState } from "react";

const BlogSearchContext = createContext(null);
export const BLOG_PAGE_SIZE = 4;

export function filterBlogPosts(posts, query) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);

  return posts.filter((post) => {
    const searchable = `${post.title} ${post.description}`.toLowerCase();
    return terms.every((term) => searchable.includes(term));
  });
}

export default function BlogSearchProvider({ children, posts = [] }) {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(BLOG_PAGE_SIZE);
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filteredPosts = filterBlogPosts(posts, query);

  // Use nearby title keywords first; fall back to the curated recommendations.
  const suggestedPosts = filteredPosts.length ? [] : [
    ...posts.filter(post => terms.some(term =>
      term.length >= 4 && post.title.toLowerCase().includes(term.slice(0, -1))
    )),
    ...posts.filter((post) => post.recommendedBlog),
  ].filter((post, index, posts) => posts.findIndex(item => item.href === post.href) === index).slice(0, 3);

  function changeQuery(value) {
    setQuery(value);
    setVisibleCount(BLOG_PAGE_SIZE);
  }

  function loadMore() {
    setVisibleCount(count => Math.min(count + BLOG_PAGE_SIZE, filteredPosts.length));
  }

  return (
    <BlogSearchContext.Provider value={{ query, changeQuery, filteredPosts, suggestedPosts, visibleCount, loadMore }}>
      {children}
    </BlogSearchContext.Provider>
  );
}

export function useBlogSearch() {
  return useContext(BlogSearchContext);
}
