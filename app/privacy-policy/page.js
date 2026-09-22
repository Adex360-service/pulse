import Container from "../components/ui/Container";
import { privacyPolicy } from "../content/privacyPolicy";

export const metadata = {
  title: "Pulse Privacy Policy",
  description:
    "Read Pulse's privacy policy covering merchant accounts, connected stores, contact data, and use of its marketing automation service.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#faf8f3] pb-24 max-sm:pb-16">
      <section className="border-b border-[#ece7df] bg-white py-16 max-sm:py-12">
        <Container>
          <div className="mx-auto max-w-[850px]">
            <p className="mb-4 text-sm font-semibold tracking-[0.14em] text-[#7c36ed] uppercase">
              Legal
            </p>
            <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(42px,6vw,68px)] leading-[1.05] tracking-[-1.5px] text-[#3b197f]">
              {privacyPolicy.title}
            </h1>
            <p className="mt-5 text-sm text-[#68636d]">
              Last updated: {privacyPolicy.lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <article className="mx-auto mt-12 max-w-[850px] rounded-[24px] border border-[#ece7df] bg-white px-12 py-12 shadow-[0_12px_40px_#29211808] max-sm:mt-7 max-sm:rounded-[18px] max-sm:px-5 max-sm:py-7">
          <div className="space-y-5 text-[16px] leading-[1.75] text-[#454148]">
            {privacyPolicy.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-[#454148] marker:text-[#8b43fd]">
            {privacyPolicy.audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 space-y-10">
            {privacyPolicy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-[family-name:var(--font-fraunces)] text-[27px] leading-tight font-semibold text-[#3b197f] max-sm:text-[23px]">
                  {section.title}
                </h2>
                {section.paragraphs?.length > 0 && (
                  <div className="mt-4 space-y-4 text-[16px] leading-[1.75] text-[#454148]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-[#454148] marker:text-[#8b43fd]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.subsections && (
                  <div className="mt-5 space-y-6">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.title}>
                        <h3 className="text-[18px] font-semibold text-[#3b197f]">
                          {subsection.title}
                        </h3>
                        {subsection.paragraphs?.length > 0 && (
                          <div className="mt-3 space-y-3 text-[16px] leading-[1.75] text-[#454148]">
                            {subsection.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        )}
                        {subsection.bullets && (
                          <ul className="mt-3 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-[#454148] marker:text-[#8b43fd]">
                            {subsection.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {section.closingParagraph && (
                  <p className="mt-4 text-[16px] leading-[1.75] text-[#454148]">
                    {section.closingParagraph}
                  </p>
                )}
                {section.closingParagraphs && (
                  <div className="mt-4 space-y-4 text-[16px] leading-[1.75] text-[#454148]">
                    {section.closingParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>
      </Container>
    </main>
  );
}
