import SectionIntro from "./SectionIntro";
import Container from "../ui/Container";

export default function Team({ reviews }) {
  return (
    <>
      <section className="relative min-h-[600px] overflow-hidden bg-[linear-gradient(118deg,#b96f5d,#bd816b_45%,#966b93_78%,#846b92)] text-white max-sm:min-h-0">
        <div className="pointer-events-none absolute inset-0 hidden opacity-20 max-sm:block" style={{ backgroundImage: "repeating-linear-gradient(52deg,transparent 0,transparent 22px,rgba(255,255,255,.16) 23px,transparent 26px)" }} />
        <Container className="relative z-[1] grid min-h-[600px] grid-cols-2 items-center gap-[45px] max-lg:grid-cols-1 max-lg:py-[70px] max-sm:min-h-0 max-sm:gap-2 max-sm:pt-10 max-sm:pb-0">
          <div className="max-sm:text-center">
            <SectionIntro eyebrow="Shows up as your team" light eyebrowClassName="mb-6 max-sm:mb-6 max-sm:text-xs max-sm:tracking-[3px]" headingClassName="text-[66px] leading-[1.05] max-sm:text-[32px] max-sm:leading-[1.08] max-sm:tracking-[-1px]">Real people. In your<br className="max-sm:hidden" /> dedicated <em>Slack</em><br className="max-sm:hidden" /> channel.</SectionIntro>
            <p className="mt-6 max-w-[560px] text-[17px] leading-[1.55] text-white max-sm:hidden">A dedicated CSM as your growth partner. Tight SLAs. A dedicated support POC as your execution hand.</p>
          </div>
          <div className="relative h-[600px] self-stretch max-lg:h-[420px] max-sm:h-[330px]"><div className="absolute inset-0 bg-[length:auto_84%] bg-[position:82%_100%] bg-no-repeat max-sm:bg-[length:auto_100%] max-sm:bg-[position:78%_100%]" style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a01c5900b277fe4e524af62_Group%2048096363.avif")' }} /><div className="absolute inset-[31%_42%_25%_2%] bg-contain bg-center bg-no-repeat drop-shadow-[4px_6px_14px_#0005] max-lg:inset-[26%_40%_24%_3%] max-sm:inset-[24%_28%_15%_0]" style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a01c5901db240e66cbbe369_4243a25bf11c365f4a190dcb2223a757_slack.avif")' }} /></div>
        </Container>
      </section>
      <section className="overflow-hidden border-b border-[#eee] bg-white py-[38px] hover:[&>div]:[animation-play-state:paused]">
        <div className="flex w-max gap-6 animate-[reviewMarquee_55s_linear_infinite]">
          {reviews.concat(reviews).map(([brand, meta, quote, image], index) => (
            <article className="grid h-[195px] w-[620px] grid-cols-[56%_44%] overflow-hidden rounded-lg border border-[#eadfda] bg-white max-sm:h-[150px] max-sm:w-[340px] max-sm:grid-cols-[62%_38%]" key={`${brand}-${index}`}><div className="px-6 py-[30px] max-sm:p-[18px]"><b className="text-base text-[#7726d9]">{brand}</b><small className="mt-3.5 block text-[10px] text-[#555] uppercase">{meta}</small><p className="mt-5 font-[family-name:var(--font-fraunces)] text-xl leading-[1.25] italic text-[#3b197f] max-sm:text-sm">“{quote}”</p></div><span className="block bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${image}")` }} /></article>
          ))}
        </div>
      </section>
    </>
  );
}
