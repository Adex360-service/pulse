import Reveal from "./Reveal";
import Link from "next/link";
import LiquidButtonLayers from "../ui/LiquidButtonLayers";

export default function RetentionStories({ stories, clouds }) {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[linear-gradient(180deg,#f0f3ff_0%,#fff_48%,#fff0e8_100%)] px-5 py-[150px] text-[#32135e] max-sm:py-20">
      <img
        src={clouds[0]}
        alt=""
        className="pointer-events-none absolute left-0 top-[38%] w-[25%] opacity-70"
      />
      <img
        src={clouds[1]}
        alt=""
        className="pointer-events-none absolute right-0 top-[24%] w-[25%] opacity-70"
      />
      <div className="relative mx-auto grid max-w-[1035px] grid-cols-3 gap-6 max-lg:max-w-[620px] max-lg:grid-cols-1">
        {stories.slice(0, 3).map((story, index) => (
          <Reveal
            key={story.brand}
            className={`h-full retention-delay-${index}`}
          >
            <article className="flex flex-col rounded-[24px] bg-white/90 px-[22px] py-[44px] shadow-[0_10px_35px_rgba(70,40,110,.03)] backdrop-blur-[2px]">
              <h3 className="font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.16] font-semibold tracking-[-.025em]">
                {story.title || story.metric}
              </h3>
              <p className="mt-7 line-clamp-6 text-[16px] leading-[1.35] text-[#242126]">
                {story.description || `“${story.quote}”`}
              </p>
              {/* <img
                src={story.image || story.logo}
                alt={story.brand || story.title}
                className="mt-auto h-[92px] w-full rounded-lg object-cover"
              /> */}
              <p className="mt-5 text-[16px] font-medium text-[#6c3bc0]">
                {story.category} · Migrated from {story.migratedFrom || "—"}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="relative mt-12 text-center">
        <Link
          href="/success-stories"
          className="loop-liquid-button relative inline-flex items-center justify-center rounded-full bg-[#7928dc] px-8 py-3 text-sm font-semibold text-white"
        >
          <span>View all success stories</span>
          <LiquidButtonLayers />
        </Link>
      </div>
    </section>
  );
}
