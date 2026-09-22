import BlogImage from "./BlogImage";

export default function BlogPostCard({ post, story = false, clampText = false }) {
  return (
    <article className="flex h-full min-w-0 flex-col" data-blog-card>
      <a className="group block" href={post.href}>
        <BlogImage src={post.image} />
        <h3 className={`mt-3 text-[17px] leading-[1.3] font-semibold transition-colors group-hover:text-[#7138e8] ${story || clampText ? "line-clamp-2" : ""} ${story ? "font-[family-name:var(--font-inter)]" : "font-[family-name:var(--font-fraunces)]"}`}>
          {post.title}
        </h3>
      </a>
      {!story && post.description && <p className={`mt-2 text-[15px] leading-[1.45] text-[#262522] ${clampText ? "line-clamp-2" : "line-clamp-3"}`}>{post.description}</p>}
      <p className={`pt-6 text-[13px] leading-5 ${story ? "text-[#262522]" : "mt-auto text-[#666]"}`}>{post.date}</p>
    </article>
  );
}
