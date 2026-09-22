import Image from "next/image";

export default function BlogArticleAuthor({
  author,
  date,
  readTime,
  thumbnail,
  badge,
}) {
  return (
    <div className="mb-8 flex items-center justify-between gap-5 border-b border-[#e5e1dd] py-8 max-sm:items-start max-sm:flex-wrap">
      <div className="flex items-center gap-4">
        {thumbnail && (
          <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#f1edf6]">
            <Image
              src={thumbnail}
              alt={author ? `${author} portrait` : ""}
              fill
              sizes="64px"
              className="object-cover"
            />
          </span>
        )}
        <div>
          {author && <p className="text-sm font-semibold">{author}</p>}
          <p className="mt-1 text-xs leading-5 text-[#67615e]">
            {date}
            {readTime && (
              <>
                <span className="mx-1.5" aria-hidden="true">
                  •
                </span>
                {readTime}
              </>
            )}
          </p>
        </div>
      </div>
      {badge && (
        <span className="rounded-full border border-[#ddd8d5] px-4 py-1 text-xs text-[#625d59]">
          {badge}
        </span>
      )}
    </div>
  );
}
