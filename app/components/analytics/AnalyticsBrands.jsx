"use client";

import Visual from "./AnalyticsVisual";
import { useAnalyticsMotion } from "./AnalyticsMotionProvider";
import { brandAssets, trustedHeading } from "../../content/analytics";

export default function AnalyticsBrands() {
  const { paused } = useAnalyticsMotion();
  return (
    <section className="pt-[72px] pb-10 text-center max-[700px]:pt-12" aria-label="Trusted brands">
      <p className="mb-8 text-sm leading-[1.55] text-[#55514f]">{trustedHeading}</p>
      <div className="group/marquee mx-auto max-w-[1450px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] motion-reduce:overflow-x-auto" data-paused={paused}>
        <div className="flex w-max animate-[marquee_65s_linear_infinite] will-change-transform group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] group-data-[paused=true]/marquee:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:transform-none">
          {[0, 1].map(repeat => (
            <div className="flex shrink-0 items-center gap-[65px] pr-[65px] motion-reduce:aria-hidden:hidden" key={repeat} aria-hidden={repeat > 0 ? true : undefined}>
              {brandAssets.map(asset => (
                <span className="relative block h-[35px] w-[120px] shrink-0" key={asset}>
                  <Visual asset={asset} alt="" fill sizes="120px" className="object-contain opacity-50 grayscale" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
