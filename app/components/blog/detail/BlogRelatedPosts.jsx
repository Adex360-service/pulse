import Link from "next/link";
import Container from "../../ui/Container";
import BlogImage from "../BlogImage";
import { blogArticles } from "../../../content/blogContent";

export default function BlogRelatedPosts({ currentSlug }) {
  const posts = blogArticles.filter((article) => article.slug !== currentSlug);

  return (
    <section className="bg-[#f7f7fc] py-12" aria-labelledby="related-posts-title">
      <Container className="max-w-[1120px]">
        <h2
          id="related-posts-title"
          className="text-center font-[family-name:var(--font-fraunces)] text-[30px] font-semibold"
        >
          You might also like...
        </h2>
        <div className="mt-8 grid grid-cols-3 gap-5 max-sm:grid-cols-1">
          {posts.slice(0, 3).map((post) => (
            <article key={post.slug}>
              <Link href={post.href} className="group block">
                <BlogImage src={post.image} alt={post.title} />
                <h3 className="mt-3 text-sm leading-[1.4] font-semibold group-hover:text-[#8241ff]">
                  {post.title}
                </h3>
              </Link>
              <p className="mt-2 text-xs text-[#7c747f]">{post.date}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
