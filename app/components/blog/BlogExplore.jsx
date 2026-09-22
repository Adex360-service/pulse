"use client";

import Container from "../ui/Container";
import BlogPostCard from "./BlogPostCard";
import BlogSearch from "./BlogSearch";
import { filterBlogPosts, useBlogSearch } from "./BlogSearchProvider";

export default function BlogExplore({ posts = [] }) {
  const { query, changeQuery, visibleCount, loadMore } = useBlogSearch();
  if (posts.length === 0) return null;

  const filteredPosts = filterBlogPosts(posts, query);
  const visiblePosts = filteredPosts.slice(0, visibleCount);
  return (
    <section id="explore-blogs" className="scroll-mt-24 pt-20 pb-[72px] max-sm:py-12" aria-labelledby="explore-title">
      <Container>
        <div className="mb-10 flex items-center justify-between gap-6 max-sm:flex-col max-sm:items-stretch">
          <h2 id="explore-title" className="font-[family-name:var(--font-fraunces)] text-[32px] leading-[1.2] font-semibold tracking-[-.5px] max-sm:text-[28px]">Explore more blogs</h2>
          <BlogSearch label="Search the blog collection" className="w-full max-w-[450px] max-sm:max-w-none" />
        </div>
        <div id="explore-posts" className="grid grid-cols-4 gap-x-4 gap-y-12 max-lg:grid-cols-2 max-lg:gap-x-6 max-sm:grid-cols-1">
          {visiblePosts.map(post => <BlogPostCard post={post} key={post.slug} />)}
        </div>
        <p className="sr-only" role="status" aria-live="polite">Showing {visiblePosts.length} of {filteredPosts.length} blog posts{query.trim() ? ` matching ${query.trim()}` : ""}.</p>
        {filteredPosts.length === 0 && (
          <div className="rounded-2xl bg-[#f7f7fc] px-6 py-12 text-center">
            <p className="text-lg">No blog posts match your search.</p>
            <button className="mt-4 font-semibold text-[#7138e8] underline underline-offset-4" onClick={() => changeQuery("")}>Clear search</button>
          </div>
        )}
        {visibleCount < filteredPosts.length && (
          <div className="mt-20 text-center max-sm:mt-10">
            <button className="min-w-[188px] rounded-full border border-[#c8c5c2] bg-white px-10 py-2.5 text-sm transition-colors hover:border-[#7138e8] hover:bg-[#f5f0ff] hover:text-[#7138e8]" aria-controls="explore-posts" onClick={loadMore}>Load more</button>
          </div>
        )}
      </Container>
    </section>
  );
}
