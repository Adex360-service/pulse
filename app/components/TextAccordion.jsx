"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";

const items = [
  {
    heading:
      "Do I need to use features, or can I start with just one?",
    copy: "You can start with any single feature, Email, WhatsApp, Push, Product Feed, or Sorting, and add the others whenever you're ready. Everything shares the same customer and product data, so nothing needs to be rebuilt when you expand.",
  },
  {
    heading: "How long does setup take?",
    copy: "Most stores are up and running in under 15 minutes. Connect your Shopify store, choose a starting template, and your first automation can be live the same day.",
  },
  {
    heading: "Will Pulse slow down my store?",
    copy: "No. Pulse runs independently of your storefront and syncs through Shopify's standard data connections, so there's no impact on page speed or checkout performance.",
  },
  {
    heading: "I'm already using Klaviyo, Brevo, or Mailchimp. Can I switch without losing my data?",
    copy: "Yes. We help you migrate your flows, segments, and subscriber list at no extra cost, so switching doesn't mean starting from zero.",
  },
  {
    heading: "Is there a free plan?",
    copy: "Yes, Pulse offers a free plan to get started. You can upgrade as your store grows and you need higher sending limits or advanced features.",
    linkText: "See full pricing",
    linkHref: "/pricing",
  },
  {
    heading: "Is my customer data secure?",
    copy: "Yes. All data is encrypted, GDPR-compliant, and never sold or shared with third parties. You retain full ownership and can export your data at any time.",
  },
  {
    heading: "Do I need technical or design skills to use Pulse?",
    copy: "No. Every flow, campaign, and sorting rule starts from a ready-made template you can customize without writing code.",
  },
  {
    heading: "What kind of support do I get?",
    copy: "Live chat and email support are included on every plan, with priority support and a dedicated contact on higher tiers.",
    linkText: "See support details",
    linkHref: "/support",
  },
];

export default function TextAccordion() {
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