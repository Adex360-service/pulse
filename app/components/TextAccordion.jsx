"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";


export default function TextAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="why-loop"
      className="bg-white pt-10 pb-32.5 max-sm:pt-12.5 max-sm:pb-13.75"
    >
      <Container>
        <div>
          <h2 className="font-(family-name:--font-fraunces) text-[66px] leading-[1.06] font-normal tracking-[-1.8px] text-[#3b197f] max-sm:text-[32px] max-sm:text-center">
            FAQs
          </h2>
        </div>
        <div className="mt-10">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={item.heading}
                className="border-t border-dashed border-[#ded8e6] last:border-b"
              >
                <button
                  className="flex min-h-19 w-full cursor-pointer items-center gap-4.5 border-0 bg-transparent p-0 text-left text-[#3b197f] max-sm:gap-2.5"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`text-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="min-w-0 flex-1 text-[19px] leading-[1.35] max-lg:text-base max-sm:text-xs">
                    <strong>{item.heading}</strong>
                  </span>
                  <span
                    className="ml-auto grid h-11.5 w-11.5 shrink-0 place-items-center rounded bg-[#f6f0ff] text-[22px] text-[#8b43fd] max-sm:h-9.5 max-sm:w-9.5"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`text-panel-${index}`}
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:duration-0 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  aria-hidden={!isOpen}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="max-w-200 pt-2 pb-11.5 pl-16 max-sm:pl-0 max-sm:pb-7">
                      <p className="mt-4 text-[17px] leading-[1.6] text-[#5b5468] max-sm:text-sm">
                        {item.copy}
                        {item.linkHref && (
                          <>
                            {" "}
                            <Link
                              href={item.linkHref}
                              className="font-semibold text-[#7726d9] underline-offset-2 hover:underline"
                            >
                              {item.linkText} →
                            </Link>
                          </>
                        )}
                      </p>
                    </div>
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