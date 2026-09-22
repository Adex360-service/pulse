"use client";

import BlogSearch from "./BlogSearch";

export default function BlogFeaturedPosts({ posts }) {
  return (
    <aside className="min-w-0" aria-labelledby="featured-posts-title">
      <BlogSearch label="Search all blog posts" />
      <h2
        id="featured-posts-title"
        className="mt-6 border-b-2 border-[#b78ae4] pb-2 font-[family-name:var(--font-fraunces)] text-2xl leading-[1.2] font-semibold text-[#46218b]"
      >
        Featured Posts
      </h2>
      <div>
        {posts.map((post) => (
          <article className="border-b border-[#d5d3d0] py-4" key={post.slug}>
            <a
              className="block text-[14px] leading-[1.45] font-semibold hover:text-[#7138e8]"
              href={post.href}
            >
              {post.title}
            </a>
            <div className="mt-1 flex flex-wrap justify-between gap-x-3 gap-y-1 text-[13px] leading-5 text-[#666]">
              {post.author && <span>{post.author}</span>}
              <span className="ml-auto">{post.date}</span>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
