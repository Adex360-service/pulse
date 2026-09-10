"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (value) => Math.max(0, Math.min(1, value));

export default function PhaseJourney({ content, clouds, phases }) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setProgress(
        clamp(
          -rect.top / Math.max(section.offsetHeight - window.innerHeight, 1),
        ),
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  const cardReveal = clamp((progress - 0.25) / 0.1);
  const expansion = clamp((progress - 0.34) / 0.38);
  const easedExpansion = 1 - (1 - expansion) ** 3;
  const expandingWidth = 15 + easedExpansion * 240;
  const gap = easedExpansion * 12;
  const groupWidth = 255 + expandingWidth * 3 + gap * 3;
  return (
    <section
      ref={sectionRef}
      id="retention-phases"
      className="relative h-[360vh] bg-[#DAF7E3] text-[#351267] max-lg:h-auto"
    >
      <div className="sticky top-[68px] h-[calc(100vh-68px)] overflow-hidden px-5 max-lg:relative max-lg:top-0 max-lg:h-auto max-lg:min-h-screen max-lg:py-24">
        <img
          src={clouds[0]}
          alt=""
          className="pointer-events-none absolute bottom-[8%] left-0 w-[32%] opacity-75"
        />
        <img
          src={clouds[1]}
          alt=""
          className="pointer-events-none absolute right-0 bottom-[4%] w-[30%] opacity-75"
        />
        <div className="relative mx-auto h-full max-w-[1240px]">
          <h2 className="pt-[9vh] text-center font-[family-name:var(--font-fraunces)] text-[clamp(36px,3.2vw,54px)] leading-[1.08] font-semibold tracking-[-.035em]">
            {content.title}
            <br />
            {content.subtitle}
          </h2>
          <div
            className="retention-phase-group absolute top-[31%] left-1/2 flex h-[430px] -translate-x-1/2 overflow-hidden rounded-[14px] max-lg:relative max-lg:top-0 max-lg:left-0 max-lg:mt-16 max-lg:grid max-lg:h-auto max-lg:w-auto max-lg:translate-x-0 max-lg:grid-cols-2 max-sm:grid-cols-1"
            style={{ width: groupWidth, gap }}
          >
            {phases.map((phase, index) => {
              const width = index === 3 ? 255 : expandingWidth;
              const opacity =
                index === 3 ? clamp((progress - 0.12) / 0.09) : cardReveal;
              return (
                <a
                  href={`#${phase.id}`}
                  key={phase.id}
                  className="retention-phase-stage block h-fit shrink-0 overflow-hidden rounded-[14px] bg-white shadow-[0_16px_40px_#7441aa20] max-lg:w-auto max-lg:opacity-100"
                  style={{ width, opacity }}
                >
                  <div className="retention-phase-card-inner w-[255px] p-3">
                    <img
                      src={phase.icon}
                      alt=""
                      className="aspect-square w-full rounded-[10px] object-cover"
                    />
                    <h3 className="mt-3 whitespace-nowrap text-[20px] leading-5 font-semibold">
                      {phase.title}
                    </h3>
                    <p className="mt-2 text-[16px] leading-5 text-[#8b45ff]">
                      {phase.summary}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
          <div
            className="pointer-events-none absolute left-1/2 flex w-[1100px] -translate-x-1/2 text-sm tracking-widest text-[#6a40aa] italic transition-opacity max-lg:hidden"
            style={{ opacity: expansion, top: "calc(31% - 26px)" }}
          >
            <span className="w-3/4 border-b border-dashed border-[#8b65c0] pb-1 text-center">
              {content.proactiveLabel}
            </span>
            <span className="ml-6 w-1/4 border-b border-dashed border-[#8b65c0] pb-1 text-center">
              {content.reactiveLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
