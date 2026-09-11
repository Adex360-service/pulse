import Link from "next/link";
import {
  HelpCenterFooter,
  HelpCenterHeader,
  HelpChat,
} from "./HelpCenterChrome";
import ArticleToc from "./ArticleToc";

export default function HelpCenterArticle({ article }) {
  const sections = article.sections;
  return (
    <main className="min-h-screen bg-white font-sans text-[#242424]">
      <HelpCenterHeader />
      <section className="mx-auto w-[min(960px,calc(100%-40px))] pt-10">
        <nav className="flex items-center gap-3 text-[14px]">
          <Link href="/help-center">All Collections</Link>
          <span>›</span>
          <Link href={`/help-center/${article.collection.slug}`}>
            {article.collection.title}
          </Link>
          <span>›</span>
          <span className="text-[#676767]">{article.title}</span>
        </nav>
        <div className="mt-11 grid grid-cols-[minmax(0,640px)_245px] gap-[76px] max-md:grid-cols-1">
          <article className="text-[16px] leading-[1.55]">
            <h1 className="text-[34px] leading-tight font-bold">
              {article.title}
            </h1>
            <p className="mt-1 text-[17px] text-[#606060]">
              {article.description}
            </p>
            <p className="mt-5 text-[14px] text-[#666]">April 20, 2026</p>
            {article.intro.map((paragraph, index) => (
              <p
                key={`${article.id}-intro-${index + 1}`}
                className={index === 0 ? "mt-10" : "mt-7"}
              >
                {paragraph}
              </p>
            ))}
            {sections.map((section, index) => (
              <section
                id={section.id}
                key={section.id}
                className={`scroll-mt-8 pt-10 ${index === 0 ? "mt-2" : "mt-11 border-t border-[#dedede]"}`}
              >
                <h2 className="text-[21px] font-bold">{section.title}</h2>
                <div
                  className="mt-4 text-[#505050] [&_a]:text-[#793cff] [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-[#d7c2ff] [&_blockquote]:pl-5 [&_h3]:mt-7 [&_h3]:text-[18px] [&_h3]:font-bold [&_h4]:mt-6 [&_h4]:font-bold [&_img]:my-6 [&_img]:h-auto [&_img]:max-w-full [&_li]:my-1.5 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p+p]:mt-5 [&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-[#dedede] [&_td]:p-3 [&_th]:border [&_th]:border-[#dedede] [&_th]:bg-[#f6f2ff] [&_th]:p-3 [&_th]:text-left [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6"
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />
              </section>
            ))}
          </article>
          <ArticleToc sections={sections} />
        </div>
      </section>
      <HelpCenterFooter />
    </main>
  );
}
