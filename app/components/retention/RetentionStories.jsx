import Reveal from "./Reveal";

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
        {stories.map((story, index) => (
          <Reveal
            key={story.brand}
            className={`h-full retention-delay-${index}`}
          >
            <article className="flex h-[460px] flex-col rounded-[24px] bg-white/90 px-[22px] py-[44px] shadow-[0_10px_35px_rgba(70,40,110,.03)] backdrop-blur-[2px]">
              <h3 className="font-[family-name:var(--font-fraunces)] text-[34px] leading-[1.16] font-semibold tracking-[-.025em]">
                {story.metric}
              </h3>
              <p className="mt-7 text-[16px] leading-[1.35] text-[#242126]">
                “{story.quote}”
              </p>
              <img
                src={story.logo}
                alt={story.brand}
                className="mt-auto h-[48px] max-w-[245px] object-contain object-left"
              />
              <p className="mt-5 text-[16px] font-medium text-[#6c3bc0]">
                Migrated from {story.migratedFrom}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
