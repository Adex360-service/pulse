import { createElement } from "react";
import Link from "next/link";
import { resolveArticleLink } from "../../../content/blogArticles";
import BlogArticleCallouts from "./BlogArticleCallouts";
import BlogArticleComparison from "./BlogArticleComparison";
import BlogArticlePricing from "./BlogArticlePricing";
import BlogArticleCta from "./BlogArticleCta";

function Inline({ nodes }) {
  return nodes.map((node, index) => {
    if (typeof node === "string") return node;
    const children = <Inline nodes={node.children || []} />;
    if (node.tag === "a") return <a key={index} href={resolveArticleLink(node.href)} className="text-[#9954ee] underline-offset-3 hover:underline">{children}</a>;
    if (node.tag === "br") return <br key={index} />;
    if (["strong", "b", "em", "i", "u", "s", "code", "sup", "sub", "span"].includes(node.tag)) return createElement(node.tag, { key: index }, children);
    return children;
  });
}

export default function BlogArticleBody({ article }) {
  if (!article.hasFullContent) {
    return (
      <div className="pb-16">
        <h2 className="mb-5 font-[family-name:var(--font-fraunces)] text-[28px] font-semibold text-[#46218b]">Article overview</h2>
        {article.description && <p className="mb-6 text-base leading-[1.7] text-[#625d59]">{article.description}</p>}
        <p className="text-sm leading-6 text-[#625d59]">The full article is available on Loop’s website.</p>
        <a href={article.sourceUrl} className="mt-5 inline-flex rounded-full bg-[#7936e8] px-6 py-3 text-sm font-semibold text-white">Read the full article <span className="ml-2" aria-hidden="true">↗</span></a>
        <Link href="/blog" className="mt-6 block text-sm text-[#8b43fd]">← Back to all blogs</Link>
      </div>
    );
  }

  return (
    <div className="pb-10 text-[15px] leading-[1.65] text-[#625d59] [&_strong]:font-semibold">
      {article.blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return <h2 key={index} id={`article-section-${index}`} className="mt-8 mb-4 scroll-mt-24 font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.15] font-semibold tracking-[-.3px] text-[#46218b] max-sm:text-[25px]"><Inline nodes={block.children} /></h2>;
          case "h3":
          case "h4":
            return <h3 key={index} className="mt-6 mb-3 font-[family-name:var(--font-fraunces)] text-[21px] leading-[1.25] font-semibold text-[#36322e]"><Inline nodes={block.children} /></h3>;
          case "p":
            return <p key={index} className="mb-5"><Inline nodes={block.children} /></p>;
          case "blockquote":
            return <blockquote key={index} className="my-6 border-l-2 border-[#a06ae9] bg-[#faf8f3] px-6 py-4"><Inline nodes={block.children} /></blockquote>;
          case "ul":
          case "ol":
            return createElement(block.type, { key: index, className: `mb-5 space-y-1 pl-6 ${block.type === "ul" ? "list-disc" : "list-decimal"}` }, block.items.map((item, i) => <li key={i}><Inline nodes={item} /></li>));
          case "advisory": return <BlogArticleCallouts key={index} cards={block.cards} />;
          case "comparison": return <BlogArticleComparison key={index} headers={block.headers} rows={block.rows} />;
          case "pricing": return <BlogArticlePricing key={index} cards={block.cards} />;
          case "migrationBanner": return <BlogArticleCta key={index} {...block} compact />;
          case "cta": return <BlogArticleCta key={index} {...block} />;
          default: return null;
        }
      })}
    </div>
  );
}
