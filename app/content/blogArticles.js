import { blogArticles } from "./blogContent";

export const blogArticleSlugs = blogArticles.map((article) => article.slug);

export function getBlogArticle(slug) {
  const article = blogArticles.find((item) => item.slug === slug);
  if (!article) return null;

  return {
    ...article,
    readTime: article.readTime || "",
  };
}
