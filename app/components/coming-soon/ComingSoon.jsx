import Link from "next/link";
import Container from "../ui/Container";
import LiquidButtonLayers from "../ui/LiquidButtonLayers";

export default function ComingSoon({
  eyebrow,
  title,
  description,
  message,
  messageDescription,
  actionLabel,
  actionHref,
}) {
  return (
    <main className="overflow-hidden bg-[#faf8f3]">
      <section className="relative isolate flex min-h-[calc(100svh-68px)] items-center py-24 max-md:min-h-0 max-md:py-20">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[#e8d8ff] opacity-70 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[-12%] bottom-[-18%] -z-10 h-[480px] w-[480px] rounded-full bg-[#ffd8c6] opacity-60 blur-3xl"
          aria-hidden="true"
        />

        <Container>
          <div className="mx-auto max-w-[860px] text-center">
            <p className="mb-6 text-sm font-semibold tracking-[0.16em] text-[#7c36ed] uppercase">
              {eyebrow}
            </p>
            <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(48px,7vw,92px)] leading-[0.98] font-semibold tracking-[-2.5px] text-[#261447]">
              {title}
            </h1>
            <p className="mx-auto mt-8 max-w-[650px] text-[20px] leading-[1.55] text-[#5b5660] max-sm:mt-6 max-sm:text-[18px]">
              {description}
            </p>

            <div className="relative mx-auto mt-16 max-w-[700px] overflow-hidden rounded-[32px] border border-white/80 bg-white/75 px-8 py-14 shadow-[0_24px_80px_#4b25751c] backdrop-blur-sm max-sm:mt-12 max-sm:rounded-[24px] max-sm:px-6 max-sm:py-12">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#ff6b51,#8d43ff,#315be7)]"
                aria-hidden="true"
              />
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#8b43fd] text-3xl text-white shadow-[0_10px_25px_#8b43fd45]">
                ✦
              </div>
              <h2 className="mt-7 font-[family-name:var(--font-fraunces)] text-[42px] leading-tight font-semibold tracking-[-1px] text-[#261447] max-sm:text-[34px]">
                {message}
              </h2>
              <p className="mx-auto mt-4 max-w-[520px] text-[17px] leading-[1.55] text-[#68636d]">
                {messageDescription}
              </p>
              <Link
                href={actionHref}
                className="loop-liquid-button mt-8 inline-flex items-center justify-center rounded-full bg-[#8b43fd] px-7 py-3.5 text-[15px] font-semibold text-white"
              >
                <span>{actionLabel}</span>
                <LiquidButtonLayers />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
