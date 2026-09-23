import { notFound } from "next/navigation";
import Link from "next/link";
import { successStories } from "../../content/successStories";

export const dynamicParams = false;

export function generateStaticParams() {
  return successStories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const story = successStories.find((item) => item.slug === slug);
  if (!story) return { title: "Success story not found | Pulse" };
  return {
    title: `${story.title} | Pulse Success Stories`,
    description: story.description,
  };
}

export default async function SuccessStoryDetailPage({ params }) {
  const { slug } = await params;
  const story = successStories.find((item) => item.slug === slug);
  if (!story) notFound();

  return (
    <main className="bg-white text-[#2d2c2b]">
      <section className="border-b border-[#e5e2dd] bg-[#f7f6f2]">
        <div className="grid w-full grid-cols-2 max-md:grid-cols-1">
          <div
            className="h-[446px] bg-cover bg-center bg-no-repeat max-md:h-[300px]"
            style={{ backgroundImage: `url("${story.image}")` }}
          />
          <div className="grid h-[446px] grid-rows-[90px_1fr] max-md:h-auto">
            <div className="grid grid-cols-2 border-b border-[#e5e2dd]">
              {/* <div className="border-r border-[#e5e2dd] px-8 py-5 max-md:px-5">
                <span className="block text-[11px] uppercase tracking-[.16em] text-[#aaa]">
                  Industry
                </span>
                <span className="mt-2 block text-base text-[#444]">
                  {story.category}
                </span>
              </div> */}
              <div className="px-8 py-6 max-md:px-5 max-md:py-5">
                <span className="block text-[11px] uppercase tracking-[.16em] text-[#aaa]">
                  Migrated from
                </span>
                <span className="mt-2 block text-base text-[#444]">
                  {story.migratedFrom || "—"}
                </span>
              </div>
            </div>
            <div className="flex items-center px-8 py-12 max-lg:px-7 max-md:px-5 max-md:py-12">
              <h1 className="max-w-[760px] font-[family-name:var(--font-fraunces)] text-[44px] leading-[1.1] text-[#242321] max-lg:text-[36px] max-md:text-[32px]">
                {story.title}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <article className="mx-auto max-w-[1000px] px-6 py-20 max-md:py-12">
        <div className="space-y-7 text-xl leading-[1.65] text-[#5d5a57] max-md:text-lg">
          {story.description.split(/\n\s*\n/).map((paragraph) => (
            <p key={paragraph}>{paragraph.trim()}</p>
          ))}
        </div>
        <p className="mt-8 text-lg leading-[1.8] text-[#5d5a57]">
          This case study highlights how Pulse helps growing Shopify brands
          coordinate customer engagement across channels, improve delivery, and
          turn consistent campaigns into measurable revenue.
        </p>
        <Link
          href="/success-stories"
          className="mt-12 inline-block text-base text-[#8b43fd] hover:underline"
        >
          ← Back to success stories
        </Link>
      </article>
    </main>
  );
}
