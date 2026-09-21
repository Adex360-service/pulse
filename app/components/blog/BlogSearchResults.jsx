import Image from "next/image";

export default function BlogSearchResults({ id, posts, suggested, onSelect }) {
  return (
    <div
      id={id}
      role="region"
      aria-label={suggested ? "Suggested blog posts" : "Matching blog posts"}
      className="absolute top-[calc(100%-2px)] right-0 left-0 z-40 max-h-[min(640px,70vh)] overflow-y-auto overscroll-contain rounded-2xl bg-[#f0eaf8] p-3 shadow-[0_15px_35px_#35136d14] sm:p-4"
    >
      <p className="px-2 pt-1 pb-3 text-[15px] leading-[1.4] font-semibold text-[#333]" role="status">
        {suggested ? "No blogs found. Suggested blogs:" : "Matching blogs:"}
      </p>
      <ul className="space-y-3">
        {posts.map(post => (
          <li key={post.href}>
            <a
              href={post.href}
              onClick={onSelect}
              className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-[0_5px_20px_#35136d05] transition-shadow hover:shadow-[0_6px_24px_#35136d15] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#7138e8]"
            >
              <div className="min-w-0 flex-1">
                <h3 className="text-[16px] leading-[1.3] font-semibold text-[#171717]">{post.title}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.4] font-semibold text-[#606060]">{post.description}</p>
              </div>
              <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                <Image src={post.image} alt="" fill sizes="48px" className="object-cover" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
