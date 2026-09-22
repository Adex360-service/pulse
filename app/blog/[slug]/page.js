import { notFound } from "next/navigation";
import BlogArticleLayout from "../../components/blog/detail/BlogArticleLayout";
import { blogArticleSlugs, getBlogArticle } from "../../content/blogArticles";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogArticleSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return { title: "Article not found | Pulse" };
  return {
    title: `${article.title} | Pulse Blog`,
    description: article.description,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();
  return <BlogArticleLayout article={article} />;
}
