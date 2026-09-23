import Link from "next/link";
import Container from "../../ui/Container";
import BlogArticleHeader from "./BlogArticleHeader";
import BlogArticleAuthor from "./BlogArticleAuthor";
import BlogArticleBody from "./BlogArticleBody";
import BlogReadingProgress from "./BlogReadingProgress";
import BlogRelatedPosts from "./BlogRelatedPosts";

export default function BlogArticleLayout({ article }) {
  return (
    <main
      id="top"
      className="bg-white text-[#2d2c2b] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#8241ff] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#8241ff]"
    >
      <BlogReadingProgress slug={article.slug} />
      <BlogArticleHeader article={article} />
      <Container className="max-w-[800px]">
        <article id="blog-article-content">
          <BlogArticleAuthor
            author={article.author}
            date={article.date}
            readTime={article.readTime}
            thumbnail={article.thumbnail}
            badge={article.category}
          />
          <BlogArticleBody article={article} />
        </article>
      </Container>

      <BlogRelatedPosts key={article.slug} currentSlug={article.slug} />
    </main>
  );
}
