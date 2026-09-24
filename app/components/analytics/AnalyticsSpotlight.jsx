"use client";

import { useId, useState } from "react";
import Container from "../ui/Container";
import Visual from "./AnalyticsVisual";
import { stories } from "../../content/analytics";
import Link from "next/link";

export default function AnalyticsSpotlight() {
  const [active, setActive] = useState(0);
  const id = useId();
  return (
    <section
      className="pt-5 pb-[100px] max-[700px]:pb-[60px]"
      aria-label="Customer spotlight"
    >
      {/* <div className="group/ribbon mb-[100px] overflow-hidden bg-[#ff4934] text-white max-[700px]:mb-12" aria-hidden="true">
        <div className="flex w-max animate-[marquee_45s_linear_infinite] group-hover/ribbon:[animation-play-state:paused] motion-reduce:animate-none">
          {Array.from({ length: 10 }, (_, index) => (
            <span className="flex items-center gap-10 p-5 font-[family-name:var(--font-inter)] text-xl tracking-[3px] max-[700px]:py-4 max-[700px]:text-[15px]" key={index}>
              CUSTOMER SPOTLIGHT
              <i className="block h-4 w-[23px] bg-white [clip-path:polygon(0_0,100%_0,75%_50%,100%_100%,0_100%)]" />
            </span>
          ))}
        </div>
      </div> */}
      <Container>
        <div className="flex h-[clamp(460px,36vw,660px)] gap-[22px] max-[1000px]:h-[500px] max-[1000px]:gap-3 max-[700px]:h-auto max-[700px]:flex-col">
          {stories.map((story, index) => {
            const expanded = active === index;
            return (
              <article
                className={`flex min-w-0 basis-0 shrink overflow-hidden transition-[flex-grow] duration-600 ease-[cubic-bezier(.22,1,.36,1)] max-[700px]:flex-none max-[700px]:transition-[height] max-[700px]:duration-450 max-[700px]:ease-in-out motion-reduce:transition-none ${expanded ? "grow-4 max-[1000px]:grow-5 max-[700px]:h-[400px]" : "grow max-[700px]:h-[105px]"}`}
                key={story.name}
              >
                <button
                  className={`group/story relative block h-full min-w-0 shrink-0 overflow-hidden text-left ${expanded ? "w-[52%] max-[700px]:w-[48%]" : "w-full"}`}
                  aria-label={`Show ${story.name} story`}
                  aria-expanded={expanded}
                  aria-controls={`${id}-story-${index}`}
                  onClick={() => setActive(index)}
                >
                  <Visual
                    asset={story.asset}
                    alt=""
                    className={`h-full object-cover transition-[filter] duration-400 group-hover/story:brightness-100 max-[700px]:object-[center_35%] motion-reduce:transition-none ${expanded ? "brightness-100" : "brightness-[.72]"}`}
                  />
                  <span
                    className={`absolute bottom-8 left-[10%] block h-[70px] w-4/5 max-[700px]:bottom-[18px] max-[700px]:left-6 max-[700px]:h-[60px] max-[700px]:w-[130px] ${expanded ? "opacity-0" : ""}`}
                  >
                    <Visual
                      asset={story.logo}
                      alt={story.name}
                      fill
                      sizes="180px"
                    />
                  </span>
                </button>
                <div
                  id={`${id}-story-${index}`}
                  className="flex w-[48%] shrink-0 flex-col bg-[#540b2c] px-7 pt-9 pb-[30px] text-white max-[1000px]:px-[18px] max-[1000px]:py-[25px] max-[700px]:w-[52%] max-[700px]:py-6 hidden:hidden"
                  hidden={!expanded}
                >
                  <span className="relative block h-[68px] w-full max-w-[180px] shrink-0 max-[700px]:h-[55px]">
                    <Visual
                      asset={story.logo}
                      alt={story.name}
                      fill
                      sizes="180px"
                      className="object-contain object-left"
                    />
                  </span>
                  <div className="mt-auto">
                    <strong className="block font-[family-name:var(--font-fraunces)] text-[clamp(42px,4.8vw,60px)] leading-none font-normal whitespace-nowrap text-[#ff4934] max-[1000px]:text-[48px] max-[700px]:text-[clamp(38px,8vw,55px)]">
                      {story.stat}
                      <span className="ml-[3px] text-[.5em]" aria-hidden="true">
                        ↗
                      </span>
                    </strong>
                    <p className="mt-4 mb-[42px] text-[15px] leading-[1.55] max-[1000px]:mb-[25px] max-[1000px]:text-[13px]">
                      {story.description}
                    </p>
                    <Link
                      className="text-sm leading-[1.8] underline underline-offset-8 max-[1000px]:text-xs"
                      href={story.href}
                    >
                      Read {story.name}’s story{" "}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
