import Container from "../ui/Container";
import BlogImage from "./BlogImage";
import BlogFeaturedPosts from "./BlogFeaturedPosts";

export default function BlogHero({ article, featuredPosts }) {
  if (!article) return null;

  return (
    <section className="pt-6 max-sm:pt-5">
      <Container>
        <div
        // className="grid grid-cols-[2.04fr_1fr] items-start gap-8 max-lg:grid-cols-[1.7fr_1fr] max-md:grid-cols-1"
        >
          <article className="overflow-hidden max-w-5xl m-auto rounded-2xl bg-[#f7f7fc]">
            <a className="group block" href={article.href}>
              <div className="[&>div]:rounded-b-none">
                <BlogImage
                  src={article.image}
                  priority
                  sizes="(max-width: 768px) 100vw, 850px"
                />
              </div>
              <div className="px-6 pt-6 pb-7 max-sm:px-5">
                <h1 className="font-[family-name:var(--font-fraunces)] text-[32px] leading-[1.08] font-semibold tracking-[-.6px] group-hover:text-[#7138e8] max-lg:text-[28px] max-sm:text-[26px]">
                  {article.title}
                </h1>
                <p className="mt-3 text-[15px] leading-[1.45]">
                  {article.description}
                </p>
                <p className="mt-7 text-[13px] text-[#666]">{article.date}</p>
              </div>
            </a>
          </article>
          {/* {featuredPosts?.length > 0 && (
            <BlogFeaturedPosts posts={featuredPosts} />
          )} */}
        </div>
      </Container>
    </section>
  );
}
