import { notFound } from "next/navigation";
import HelpCenterCollection from "../../components/help-center/HelpCenterCollection";
import { helpCenterCollections } from "../../content/helpCenter";

export function generateStaticParams() {
  return helpCenterCollections.map(({ slug }) => ({ collection: slug }));
}

export async function generateMetadata({ params }) {
  const { collection: slug } = await params;
  const collection = helpCenterCollections.find((item) => item.slug === slug);
  return {
    title: collection
      ? `${collection.title} | Loop Subscriptions Help Center`
      : "Help Center",
  };
}

export default async function Page({ params }) {
  const { collection: slug } = await params;
  const collection = helpCenterCollections.find((item) => item.slug === slug);
  if (!collection) notFound();
  return <HelpCenterCollection collection={collection} />;
}
