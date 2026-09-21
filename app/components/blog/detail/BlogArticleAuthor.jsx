import Image from "next/image";

export default function BlogArticleAuthor({ article }) {
  return (
    <div className="mb-8 flex items-start justify-between gap-5 border-b border-[#e5e1dd] py-8 max-sm:flex-wrap">
      <div className="flex items-center gap-3">
        {article.authorImage && <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-full"><Image src={article.authorImage} alt={article.author || ""} fill sizes="48px" className="object-cover" /></span>}
        <div>
          {article.author && <p className="text-sm font-semibold">{article.author}</p>}
          <p className="mt-1 text-xs leading-5 text-[#67615e]">{article.date}{article.readTime && <> <span className="mx-1.5" aria-hidden="true">•</span> {article.readTime}</>}</p>
        </div>
      </div>
      <span className="rounded-full border border-[#ddd8d5] px-4 py-1 text-xs text-[#625d59]">{article.category}</span>
    </div>
  );
}
