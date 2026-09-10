import Link from "next/link";

export default function RetentionHero({ content, cards }) {
  return (
    <section className="retention-hero-bg relative min-h-[calc(100vh-68px)] overflow-hidden px-5 pt-[100px] pb-[110px] text-[#321166] max-sm:px-3 max-sm:py-[60px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-center font-[family-name:var(--font-fraunces)] text-[96px] leading-none font-normal tracking-[-.035em] max-lg:text-[64px] max-md:text-[48px] max-sm:text-[32px]">
            {content.title}
            <span className="block text-[#126F58]">{content.accent}</span>
          </h1>
         <div className="flex items-start justify-center gap-8 max-sm:w-full max-sm:flex-col max-sm:gap-6">
            {cards.map((card, index) => (
              <div key={card.image} className="flex max-w-[500px] flex-col">
                <Link
                  href="#retention-phases"
                  className="block overflow-hidden"
                >
                  <img
                    src={card.image}
                    alt={index ? "Reactive retention" : "Proactive retention"}
                    className="h-[350px] w-auto object-cover max-md:h-[220px] max-sm:h-auto max-sm:w-full"
                  />
                </Link>

                <p className="mt-5 text-center text-[16px] leading-5 text-[#321166] mx-auto max-w-80">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[60px] flex flex-col items-center gap-2 text-sm max-sm:hidden">
          <span className="retention-scroll-mouse">
            <i />
          </span>
          {content.scrollLabel}
        </div>
      </div>
    </section>
  );
}
