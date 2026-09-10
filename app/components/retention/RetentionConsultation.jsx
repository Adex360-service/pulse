import Link from "next/link";
import Reveal from "./Reveal";

export default function RetentionConsultation({ content }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f5fbff,#eff2ff)] px-5 py-[120px] text-[#32135e] max-sm:py-20">
      <Reveal className="relative mx-auto max-w-[1280px]">
        <div className="rounded-[34px] bg-[linear-gradient(135deg,#f0e7ff_0%,#e4ecff_100%)] px-10 py-[66px] text-center max-sm:px-5 max-sm:py-14">
          <h2 className="font-[family-name:var(--font-fraunces)] text-[clamp(38px,4vw,58px)] leading-none font-semibold tracking-[-.035em]">
            {content.title}
          </h2>
          <div className="mt-14 flex items-center justify-center text-[16px] max-lg:flex-col max-lg:gap-4">
            {content.benefits.map((benefit, index) => (
              <div className="flex items-center" key={benefit}>
                <span>{benefit}</span>
                {index < content.benefits.length - 1 && (
                  <span
                    className="retention-cta-arrow mx-5 inline-block text-[30px] leading-none font-bold text-[#ffc82e] max-lg:hidden"
                    aria-hidden="true"
                  >
                    ››
                  </span>
                )}
              </div>
            ))}
          </div>
          <Link
            href="/book-a-demo"
            className="mt-12 inline-flex min-w-[390px] items-center justify-center gap-3 rounded-full bg-[linear-gradient(100deg,#8b3eff,#326df4)] px-10 py-[18px] text-[20px] font-semibold text-white max-sm:min-w-0 max-sm:w-full"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-none stroke-current stroke-2"
            >
              <rect x="3" y="5" width="18" height="16" rx="3" />
              <path d="M7 3v4M17 3v4M3 10h18" />
              <circle cx="17" cy="17" r="3" fill="white" stroke="white" />
              <path d="m16 17 1 1 2-2" stroke="#5267f5" strokeWidth="1.5" />
            </svg>
            {content.buttonLabel}
          </Link>
          <div className="mt-10 flex items-center justify-center gap-1.5 text-[14px] font-semibold">
            <span>{content.review.count}</span>
            <span className="text-[23px] text-[#ffad00]">★</span>
            <span>{content.review.rating}</span>
            <span className="ml-1 rounded-sm bg-[#7ab55c] px-1 text-lg leading-6 text-white">
              S
            </span>
            <span className="text-[17px] font-bold italic">
              {content.review.marketplace}
            </span>
            <span className="font-normal italic text-[#514c65]">
              {content.review.suffix}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
