import Link from "next/link";

export default function BlogArticleBody({ article }) {
  const paragraphs = article.content?.paragraphs ?? [];
  const list = article.content?.list ?? [];
  const paragraphsAfterList = article.content?.paragraphsAfterList ?? [];

  return (
    <div className="pb-16 text-[16px] leading-[1.75] text-[#625d59]">
      <div className="space-y-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {list.length > 0 && (
        <ul className="mt-6 list-disc space-y-2 pl-6 marker:text-[#8b43fd]">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {paragraphsAfterList.length > 0 && (
        <div className="mt-6 space-y-5">
          {paragraphsAfterList.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      <Link
        href="/blog"
        className="mt-8 inline-flex text-sm font-medium text-[#8b43fd] hover:underline"
      >
        ← Back to all blogs
      </Link>
    </div>
  );
}
