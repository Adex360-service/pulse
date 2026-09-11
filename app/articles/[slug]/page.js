import { notFound } from "next/navigation";
import HelpCenterArticle from "../../components/help-center/HelpCenterArticle";
import { helpCenterArticles } from "../../content/helpCenter";

export function generateStaticParams() { return helpCenterArticles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = helpCenterArticles.find((item) => item.slug === slug);
  return { title: article ? `${article.title} | Loop Subscriptions Help Center` : "Help Center" };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const article = helpCenterArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <HelpCenterArticle article={article} />;
}
