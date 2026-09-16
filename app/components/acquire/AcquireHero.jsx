import Container from "../ui/Container";
import AcquireButton from "./AcquireButton";
import { acquireCdn } from "../../content/acquire";

export default function AcquireHero({ logos }) {
  return (
    <section
      className="relative min-h-[640px] overflow-hidden bg-[#e8f4ff] bg-cover bg-center bg-no-repeat pt-[92px] text-center max-sm:min-h-[650px] max-sm:pt-16"
      style={{
        backgroundImage: `url("${acquireCdn}/6854005278ae0e3b1f6f4e74_Group%2048096260%20(1).webp")`,
      }}
    >
      <Container className="relative z-10 flex flex-col items-center">
        <p className="text-base font-semibold text-[#843dff]">
          Turn every email into a reason to buy.
        </p>
        <h1 className="mt-8 max-w-[720px] font-[family-name:var(--font-display)] text-[62px] leading-[1.02] font-semibold text-[#2d155f] max-sm:mt-5 max-sm:text-[42px]">
          Email marketing that already knows what your customer wants.
        </h1>
        <p className="mt-7 max-w-[730px] text-[20px] leading-[1.35] text-[#6e686d] max-sm:text-base">
          Welcome series, abandoned cart, post-purchase, and winback flows, built from real behavior and live product data. Not templates you have to guess at.
        </p>
        <div className="mt-8">
          <AcquireButton>Book a demo</AcquireButton>
        </div>
        <p className="mt-20 text-base text-[#8376b5] max-sm:mt-16">
          Trusted by 1100+ brands that migrated to Loop
        </p>
      </Container>
      <div className="absolute bottom-7 left-1/2 z-10 w-[calc(100%_-_48px)] max-w-[1280px] -translate-x-1/2 overflow-hidden max-sm:bottom-10 max-sm:w-[calc(100%_-_32px)]">
        <div className="flex w-max animate-[acquireLogoMarquee_34s_linear_infinite] items-center motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-20 pr-20 max-sm:gap-12 max-sm:pr-12"
            >
              {logos.map(([name, image]) => (
                <img
                  key={`${copy}-${name}`}
                  src={image}
                  alt={copy ? "" : name}
                  className="h-14 w-[190px] shrink-0 object-contain grayscale max-sm:h-10 max-sm:w-[130px]"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
