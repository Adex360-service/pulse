import Container from "../ui/Container";
import AcquireButton from "../acquire/AcquireButton";
import { portalCdn } from "../../content/customerPortal";

export default function PortalHero() {
  return (
    <section className="min-h-[755px] bg-[linear-gradient(180deg,#d9efff_0%,#f8f9ff_55%,#eee0ff_100%)] py-[74px] max-sm:min-h-0 max-sm:py-16">
      <Container className="grid grid-cols-2 items-center gap-20 max-md:grid-cols-1">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-[64px] leading-[1.03] text-[#2d155f] max-lg:text-5xl max-sm:text-[42px]">
            Retention-First
            <br className="max-sm:hidden" /> Customer Portal
          </h1>
          <p className="mt-7 max-w-[590px] text-xl leading-[1.45] text-[#706a73] max-sm:text-base">
            ~70% of the subscribers visit customer portal to pause, skip, or
            cancel. Our portal transforms these high-risk moments into
            loyalty-building experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <AcquireButton>Book a demo</AcquireButton>
            <a
              href="#know-more"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#8b35ff] px-12 font-semibold text-[#8b35ff]"
            >
              Know more
            </a>
          </div>
        </div>
        <img
          src={`${portalCdn}/68595cfdd7c293a4141e0cf3_8b3d3f7568b7b112437da04c86e84fa2_Customer%20portal-2.avif`}
          alt="Loop retention-first customer portal"
          className="mx-auto max-h-[540px] w-full object-contain"
        />
      </Container>
    </section>
  );
}
