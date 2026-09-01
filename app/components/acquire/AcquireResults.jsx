import Container from "../ui/Container";

const outcomeIcons = ["♣", "◇", "↗"];

function ResultCard({ story }) {
  return (
    <article className="grid h-[610px] w-[950px] shrink-0 snap-start grid-cols-[0.95fr_1.15fr] overflow-hidden rounded-[22px] border-2 border-white bg-white/35 max-lg:h-auto max-lg:w-[82vw] max-lg:grid-cols-1 max-sm:w-[88vw]">
      <div className="flex flex-col p-10 max-sm:p-6">
        <img src={story.image} alt="" className="mx-auto h-[205px] max-w-full object-contain max-sm:h-[150px]" />
        <h3 className="mt-3 text-[42px] leading-[1.08] font-semibold text-[#10065d] max-sm:text-3xl">{story.title}</h3>
        <p className="mt-6 text-[20px] leading-[1.45] text-[#aaa5a1] max-sm:text-base">{story.description}</p>
        <div className="mt-auto flex items-center gap-4 pt-6">
          {story.headshot && <img src={story.headshot} alt="" className="h-14 w-14 rounded-full object-cover" />}
          <div><p className="font-semibold text-[#2b292a]">{story.name}</p><p className="text-sm text-[#aaa5a1]">{story.role}</p></div>
        </div>
      </div>
      <div className="flex flex-col justify-center border-l border-[#a66adb] px-8 max-lg:border-t max-lg:border-l-0 max-sm:px-6">
        {story.outcomes.map(([title, description], index) => (
          <div key={title} className="flex gap-5 border-b border-[#a66adb] py-8 last:border-0">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#d9c0ff] bg-white text-2xl text-[#8b35ff] shadow-sm">{outcomeIcons[index]}</span>
            <div><h4 className="text-xl font-semibold text-[#28106d]">{title}</h4><p className="mt-2 text-[16px] leading-[1.45] text-[#625d5f]">{description}</p></div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function AcquireResults({ stories }) {
  return (
    <section className="bg-[linear-gradient(#f6f9ff,#cbdcff)] py-28">
      <Container><h2 className="text-center font-[family-name:var(--font-display)] text-[48px] text-[#2d155f] max-sm:text-4xl">Results that speak for themselves</h2></Container>
      <div className="mt-20 ml-[max(48px,calc((100vw-1280px)/2))] overflow-hidden max-sm:ml-4">
        <div className="acquire-results-scroll flex gap-8 overflow-x-auto pb-8">
          {stories.map((story) => <ResultCard key={story.title} story={story} />)}
        </div>
      </div>
    </section>
  );
}
