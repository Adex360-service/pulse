import Container from "../ui/Container";

const outcomeIcons = ["♣", "◇", "↗"];

function ResultCard({ story, compact = false }) {
  return (
    <article className={`grid shrink-0 snap-start grid-cols-[0.95fr_1.15fr] overflow-hidden rounded-[22px] border-2 border-white bg-white/35 max-lg:h-auto max-lg:w-[82vw] max-lg:grid-cols-1 max-sm:w-[88vw] ${compact ? "h-[490px] w-[850px]" : "h-[610px] w-[950px]"}`}>
      <div className={`flex flex-col max-sm:p-6 ${compact ? "p-7" : "p-10"}`}>
        <img src={story.image} alt="" className={`mx-auto max-w-full object-contain max-sm:h-[150px] ${compact ? "h-[145px]" : "h-[205px]"}`} />
        <h3 className={`mt-3 leading-[1.08] font-semibold text-[#10065d] max-sm:text-3xl ${compact ? "text-[32px]" : "text-[42px]"}`}>{story.title}</h3>
        <p className={`leading-[1.45] text-[#aaa5a1] max-sm:text-base ${compact ? "mt-4 text-[16px]" : "mt-6 text-[20px]"}`}>{story.description}</p>
        <div className="mt-auto flex items-center gap-4 pt-6">
          {story.headshot && <img src={story.headshot} alt="" className="h-14 w-14 rounded-full object-cover" />}
          <div><p className="font-semibold text-[#2b292a]">{story.name}</p><p className="text-sm text-[#aaa5a1]">{story.role}</p></div>
        </div>
      </div>
      <div className="flex flex-col justify-center border-l border-[#a66adb] px-8 max-lg:border-t max-lg:border-l-0 max-sm:px-6">
        {story.outcomes.map(([title, description], index) => (
          <div key={title} className={`flex gap-5 border-b border-[#a66adb] last:border-0 ${compact ? "py-5" : "py-8"}`}>
            <span className={`grid shrink-0 place-items-center rounded-2xl border border-[#d9c0ff] bg-white text-[#8b35ff] shadow-sm ${compact ? "h-12 w-12 text-xl" : "h-14 w-14 text-2xl"}`}>{outcomeIcons[index]}</span>
            <div><h4 className={`${compact ? "text-lg" : "text-xl"} font-semibold text-[#28106d]`}>{title}</h4><p className={`${compact ? "mt-1 text-[14px]" : "mt-2 text-[16px]"} leading-[1.45] text-[#625d5f]`}>{description}</p></div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function AcquireResults({ stories, compact = false }) {
  return (
    <section className={`bg-[linear-gradient(#f6f9ff,#cbdcff)] ${compact ? "py-24" : "py-28"}`}>
      <Container><h2 className="text-center font-[family-name:var(--font-display)] text-[48px] text-[#2d155f] max-sm:text-4xl">Results that speak for themselves</h2></Container>
      <div className={`${compact ? "mt-14" : "mt-20"} ml-[max(48px,calc((100vw-1280px)/2))] overflow-hidden max-sm:ml-4`}>
        <div className="acquire-results-scroll flex gap-8 overflow-x-auto pb-8">
          {stories.map((story) => <ResultCard key={story.title} story={story} compact={compact} />)}
        </div>
      </div>
    </section>
  );
}
