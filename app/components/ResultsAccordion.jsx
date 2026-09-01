"use client";

import { useState } from "react";
import Container from "./ui/Container";

const stories = [
  {
    brand: "Primal Queen",
    copy: "scaled subscription revenue from $2M to $100M+",
    logo: "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019e85a43a416f99f5042b_7.avif",
    image: "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a5633b3f28ba56e56def608_image%20(74).avif",
    href: "/customer-stories/primal-queen",
  },
  {
    brand: "OSEA Malibu",
    copy: "reported churn moved from 10% to 5% after migration to Loop",
    logo: "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/685503c4c975cfc8b23faaa0_16_osea-logo.avif",
    image: "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a030dcf35a812dba2a3dd09_osea.avif",
    href: "/customer-stories/osea-malibu",
  },
  {
    brand: "Livingood Daily",
    copy: "migrated ~130K subscribers from Recharge to Loop",
    logo: "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019e857e0294e01b8faa9e_9.avif",
    image: "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a01b4e6f2138feb4d1fd8d4_3858d6e488145b5ac92dd007d81a097e_dropdownimage1.avif",
    href: "/customer-stories/livingood-daily",
  },
  {
    brand: "Four Sigmatic",
    copy: "measured ~90% rise in subscription cancellation save rate",
    logo: "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/685503c23e40b07ab26f0c6a_11_four-sigmatic-logo.avif",
    image: "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a01be4980791c0549b24f46_foursigmatic-dropdown.avif",
    href: "/customer-stories/four-sigmatic-90-increase-subscription-save-rate",
  },
  {
    brand: "Because Market",
    copy: "from Custom Setup to Loop.",
    logo: "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/685503c1515d0a522726b5f8_6_Because_New_logo.avif",
    image: "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a01be498d7cb047894c62a8_because-drop-dwon.avif",
    href: "/customer-stories/because-from-custom-setup-to-seamless-subscription-experience",
  },
];

export default function ResultsAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="results" className="bg-white pt-10 pb-[130px] max-sm:pt-[50px] max-sm:pb-[55px]">
      <Container>
        <div>
          <p className="mb-[70px] inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[3.2px] text-[#9b43ff] uppercase max-sm:mb-7"><svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="8" cy="4.5" r="2.5" /><path d="M2.8 14c.4-3 2.1-4.5 5.2-4.5s4.8 1.5 5.2 4.5" /></svg>Shows up as your results</p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[66px] leading-[1.06] font-normal tracking-[-1.8px] text-[#3b197f] max-sm:text-[40px]">
            1,100+ brands <em>migrated</em> to Loop.
            <br />
            Here&apos;s what happened.
          </h2>
        </div>
        <div className="mt-10">
          {stories.map((story, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={story.brand}
                className="border-t border-dashed border-[#ded8e6] last:border-b"
              >
                <div className="flex min-h-[76px] items-center gap-[18px] max-sm:gap-2.5">
                  <button
                    className="flex min-h-[76px] min-w-0 flex-1 cursor-pointer items-center gap-4 border-0 bg-transparent p-0 text-left text-[#3b197f] max-sm:gap-2.5"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`result-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span
                      className="block h-[46px] w-[46px] shrink-0 rounded bg-[#3b197f] bg-contain bg-center bg-no-repeat max-sm:h-[38px] max-sm:w-[38px]"
                      style={{ backgroundImage: `url("${story.logo}")` }}
                    />
                    <span className="min-w-0 flex-1 text-[19px] leading-[1.35] max-lg:text-base max-sm:text-xs">
                      <strong>{story.brand}</strong> {story.copy}
                    </span>
                    {!isOpen && (
                      <span className="ml-auto grid h-[46px] w-[46px] shrink-0 place-items-center rounded bg-[#f6f0ff] text-[22px] text-[#8b43fd] max-sm:h-[38px] max-sm:w-[38px]" aria-hidden="true">
                        +
                      </span>
                    )}
                  </button>
                  {isOpen && (
                    <a className="inline-flex h-11 min-w-[175px] items-center justify-center gap-2.5 rounded-[3px] border border-[#ddd2ec] px-5 text-[13px] font-semibold text-[#7726d9] max-sm:w-11 max-sm:min-w-11 max-sm:px-0 max-sm:text-[0]" href={story.href}>
                      Read the story <span>→</span>
                    </a>
                  )}
                </div>
                <div
                  id={`result-panel-${index}`}
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:duration-0 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  aria-hidden={!isOpen}
                >
                  <div className="min-h-0 overflow-hidden">
                    <a
                      href={story.href}
                      aria-label={`Read the ${story.brand} customer story`}
                      className={`block h-[590px] w-full origin-top bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:duration-0 max-sm:h-[260px] ${isOpen ? "translate-y-0 scale-100" : "-translate-y-2.5 scale-[.995]"}`}
                      tabIndex={isOpen ? 0 : -1}
                      style={{ backgroundImage: `url("${story.image}")` }}
                    />
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
