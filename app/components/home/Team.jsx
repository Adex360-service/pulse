import SectionIntro from "./SectionIntro";
import Container from "../ui/Container";
import ReviewMarquee from "../ui/ReviewMarquee";

export default function Team({ reviews }) {
  return (
    <>
      <section className="relative min-h-[600px] overflow-hidden bg-[linear-gradient(118deg,#b96f5d,#bd816b_45%,#966b93_78%,#846b92)] text-white max-sm:min-h-0">
        <div
          className="pointer-events-none absolute inset-0 hidden opacity-20 max-sm:block"
          style={{
            backgroundImage:
              "repeating-linear-gradient(52deg,transparent 0,transparent 22px,rgba(255,255,255,.16) 23px,transparent 26px)",
          }}
        />
        <Container className="relative z-[1] grid min-h-[600px] grid-cols-2 items-center gap-[45px] max-lg:grid-cols-1 max-lg:py-[70px] max-sm:min-h-0 max-sm:gap-2 max-sm:pt-10 max-sm:pb-0">
          <div className="max-sm:text-center">
            <SectionIntro
              eyebrow="SHOWS UP AT THE RIGHT MOMENT"
              light
              eyebrowClassName="mb-6 max-sm:mb-6 max-sm:text-xs max-sm:tracking-[3px]"
              headingClassName="text-[66px] leading-[1.05] max-sm:text-[32px] max-sm:leading-[1.08] max-sm:tracking-[-1px]"
            >
              Real updates
              <br className="max-sm:hidden" />
              Right in
              <br className="max-sm:hidden" /> their pocket.
            </SectionIntro>
            <p className="mt-6 max-w-[560px] text-[17px] leading-[1.55] text-white max-sm:hidden">
              Instant push notifications for every order milestone from
              confirmation to delivery. Keep customers in the loop,
              automatically.
            </p>
          </div>
          <div className="relative h-[600px] self-stretch max-lg:h-[420px] max-sm:h-[330px]">
            <div
              className="absolute inset-0 bg-[length:auto_84%] bg-[position:82%_100%] bg-no-repeat max-sm:bg-[length:auto_100%] max-sm:bg-[position:78%_100%]"
              style={{
                backgroundImage: 'url("/images/first-banner.png")',
              }}
            />
            {/* <div
              className="absolute inset-[20%_32%_15%_-10%] bg-contain bg-center bg-no-repeat drop-shadow-[4px_6px_14px_#0005] max-lg:inset-[18%_30%_16%_-4%] max-sm:inset-[16%_20%_8%_-6%]"
              style={{
                backgroundImage:
                  'url("/images/sec-banner.png")',
              }}
            /> */}
          </div>
        </Container>
      </section>
      <ReviewMarquee reviews={reviews} />
    </>
  );
}
