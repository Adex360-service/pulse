import Link from "next/link";
import {
  HelpCenterFooter,
  HelpCenterHeader,
  HelpChat,
} from "./HelpCenterChrome";

export default function HelpCenterCollection({ collection }) {
  return (
    <main className="min-h-screen bg-white font-sans text-[#252525]">
      <HelpCenterHeader />
      <section className="mx-auto w-[min(960px,calc(100%-40px))] pt-10">
        <nav className="flex items-center gap-3 text-[14px]">
          <Link href="/help-center">All Collections</Link>
          <span>›</span>
          <span className="text-[#676767]">{collection.title}</span>
        </nav>
        <div className="mt-8">
          <span className="grid h-[62px] w-[62px] place-items-center rounded-[16px] bg-[#efe5ff]">
            <img
              src={collection.icon}
              alt=""
              className="h-[50px] w-[50px] object-contain"
            />
          </span>
          <h1 className="mt-5 text-[36px] leading-tight font-bold">
            {collection.title}
          </h1>
          <p className="mt-6 text-[16px] text-[#666]">
            {collection.articles.length}{" "}
            {collection.articles.length === 1 ? "article" : "articles"}
          </p>
        </div>
        {collection.articles.length > 0 ? (
          <div className="mt-10 overflow-hidden rounded-[20px] border border-[#dedede] p-3">
            {collection.articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex h-[53px] items-center justify-between rounded-[16px] px-4 text-[17px] transition-colors duration-200 hover:bg-[#f1ebff] hover:text-[#7d42ff] focus-visible:bg-[#f1ebff] focus-visible:text-[#7d42ff] focus-visible:outline-none"
              >
                <span>{article.title}</span>
                <span className="text-[25px] text-[#793cff] transition-transform duration-200 group-hover:translate-x-0.5">
                  ›
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[20px] border border-[#dedede] px-7 py-12 text-center text-[16px] text-[#777]">
            No articles have been added yet.
          </div>
        )}
      </section>
      <HelpCenterFooter />
      <HelpChat />
    </main>
  );
}
