"use client";

import { createContext, useContext, useState } from "react";
import { blogPosts, recommendedPosts } from "../../content/blog";

const BlogSearchContext = createContext(null);
export const BLOG_PAGE_SIZE = 4;

export default function BlogSearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(BLOG_PAGE_SIZE);
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filteredPosts = blogPosts.filter(post => {
    const searchable = `${post.title} ${post.description}`.toLowerCase();
    return terms.every(term => searchable.includes(term));
  });

  // Use nearby title keywords first; fall back to the curated recommendations.
  const suggestedPosts = filteredPosts.length ? [] : [
    ...blogPosts.filter(post => terms.some(term =>
      term.length >= 4 && post.title.toLowerCase().includes(term.slice(0, -1))
    )),
    ...recommendedPosts,
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
