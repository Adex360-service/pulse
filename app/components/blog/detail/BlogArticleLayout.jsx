import Link from "next/link";
import Container from "../../ui/Container";
import BlogArticleHeader from "./BlogArticleHeader";
import BlogArticleAuthor from "./BlogArticleAuthor";
import BlogArticleBody from "./BlogArticleBody";
import BlogReadingProgress from "./BlogReadingProgress";
import BlogRelatedPosts from "./BlogRelatedPosts";

export default function BlogArticleLayout({ article }) {
  return (
    <main id="top" className="bg-white text-[#2d2c2b] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#8241ff] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#8241ff]">
      <BlogReadingProgress slug={article.slug} />
      <BlogArticleHeader article={article} />
      <Container className="max-w-[800px]">
        <article id="blog-article-content">
          <BlogArticleAuthor article={article} />
          <BlogArticleBody article={article} />
        </article>
      </Container>
      <Link href="/book-a-demo" className="fixed top-[40%] right-0 z-40 rounded-l bg-[#29934a] px-2 py-4 text-xs font-semibold text-white shadow-md [writing-mode:vertical-rl] max-md:hidden">Book a Demo</Link>
      <BlogRelatedPosts key={article.slug} currentSlug={article.slug} />
    </main>
  );
}
