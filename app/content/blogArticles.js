import { blogPosts, heroPost, featuredPosts, recommendedPosts, blogCategories } from "./blog";
import fullArticles from "./blogArticleContent.json";
import relatedCategories from "./blogRelated.json";

const entries = [
  ...blogPosts,
  heroPost,
  ...recommendedPosts,
  ...blogCategories.flatMap(category => category.posts),
  ...featuredPosts,
  ...relatedCategories.flatMap(category => category.posts),
];
const articles = new Map();
for (const entry of entries) {
  const slug = entry.slug || entry.href.split("/blog/")[1];
  if (!slug) continue;
  const existing = articles.get(slug);
  articles.set(slug, existing
    ? { ...entry, ...existing, author: existing.author || entry.author }
    : { ...entry, slug });
}
for (const [slug, article] of Object.entries(fullArticles)) {
  articles.set(slug, { ...articles.get(slug), ...article });
}

export const blogArticleSlugs = Array.from(articles.keys());
export { relatedCategories };

export function getBlogArticle(slug) {
  const article = articles.get(slug);
  if (!article) return null;
  return {
    ...article,
    sourceUrl: `https://www.loopwork.co/blog/${slug}`,
    category: article.category || "Subscriptions",
    hasFullContent: Boolean(article.blocks?.length),
  };
}

export function resolveArticleLink(href) {
  if (!href) return "#";
  if (/^(mailto:|#)/.test(href)) return href;
  const url = new URL(href, "https://www.loopwork.co");
  if (!["http:", "https:"].includes(url.protocol)) return "#";
  if (url.hostname === "www.loopwork.co" || url.hostname === "loopwork.co") {
    const slug = url.pathname.split("/blog/")[1];
    if (slug && articles.has(slug)) return `${url.pathname}${url.search}${url.hash}`;
    if (["/", "/blog", "/book-a-demo", "/migration", "/pricing", "/acquire", "/retention", "/feature/customer-portal"].includes(url.pathname)) return `${url.pathname}${url.search}${url.hash}`;
  }
  return url.href;
}
