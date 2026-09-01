"use client";

import { useState } from "react";

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
    <section id="results" className="results section-pad">
      <div className="shell narrow">
        <div className="section-intro results-intro">
          <p className="eyebrow">Shows up as your results</p>
          <h2>
            1,100+ brands <em>migrated</em> to Loop.
            <br />
            Here&apos;s what happened.
          </h2>
        </div>
        <div className="results-list">
          {stories.map((story, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={story.brand}
                className={isOpen ? "open-result" : ""}
              >
                <div className="result-row">
                  <button
                    className="result-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`result-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span
                      className="result-logo"
                      style={{ backgroundImage: `url("${story.logo}")` }}
                    />
                    <span className="result-copy">
                      <strong>{story.brand}</strong> {story.copy}
                    </span>
                    {!isOpen && (
                      <span className="result-action" aria-hidden="true">
                        +
                      </span>
                    )}
                  </button>
                  {isOpen && (
                    <a className="story-link" href={story.href}>
                      Read the story <span>→</span>
                    </a>
                  )}
                </div>
                <div
                  id={`result-panel-${index}`}
                  className={`result-panel${isOpen ? " is-open" : ""}`}
                  aria-hidden={!isOpen}
                >
                  <div className="result-panel-inner">
                    <a
                      href={story.href}
                      aria-label={`Read the ${story.brand} customer story`}
                      className="result-image"
                      tabIndex={isOpen ? 0 : -1}
                      style={{ backgroundImage: `url("${story.image}")` }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
