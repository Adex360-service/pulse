import { blogArticles } from "./blogContent";

export const blogArticleSlugs = blogArticles.map((article) => article.slug);

export function getBlogArticle(slug) {
  const article = blogArticles.find((item) => item.slug === slug);
  if (!article) return null;

  return {
    ...article,
    category: article.category || "Subscriptions",
    readTime: article.readTime || "",
  };
}
