"use client";

import Image from "next/image";
import Visual from "./AnalyticsVisual";
import { useAnalyticsMotion } from "./AnalyticsMotionProvider";
import { capabilities } from "../../content/analytics";

export default function AnalyticsCapabilities() {
  const { paused, setPaused } = useAnalyticsMotion();
  return (
    <section className="relative pt-5" aria-label="Analytics capabilities">
      <Image className="pointer-events-none absolute -top-[140px] right-[12%] z-1 h-auto w-[clamp(150px,17vw,280px)] max-[700px]:-top-20 max-[700px]:right-[8%] max-[700px]:w-[140px]" src="/images/analytics/flag.webp" alt="" width={330} height={340} />
      <div className="group/marquee overflow-hidden motion-reduce:overflow-x-auto" data-paused={paused}>
        <div className="flex w-max animate-analytics-cards will-change-transform group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] group-data-[paused=true]/marquee:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:transform-none">
          {[0, 1, 2].map(repeat => (
            <div className="flex shrink-0 gap-6 pr-6 max-[700px]:gap-[18px] max-[700px]:pr-[18px] motion-reduce:aria-hidden:hidden" key={repeat} aria-hidden={repeat > 0 ? true : undefined}>
              {capabilities.map(item => (
                <article className="w-[clamp(275px,21vw,420px)] shrink-0 max-[700px]:w-[76vw] max-[700px]:max-w-[340px]" key={item.asset}>
                  <Visual asset={item.asset} alt={repeat ? "" : item.title} priority={repeat === 0} className="aspect-[3/4] object-cover" />
                  <h3 className="mt-7 font-[family-name:var(--font-fraunces)] text-[21px] leading-[1.3] font-semibold max-[700px]:mt-5">{item.title}</h3>
                  <p className="mt-2.5 text-base leading-[1.55] text-[#55514f]">{item.description}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className="mt-[22px] mr-8 ml-auto block border-b border-[#aaa] py-[3px] text-xs text-[#655f59] motion-reduce:hidden" onClick={() => setPaused(!paused)} aria-pressed={paused}>
        {paused ? "Play animation" : "Pause animation"}
      </button>
    </section>
  );
}
