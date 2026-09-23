import AnalyticsHero from "../components/analytics/AnalyticsHero";
import AnalyticsMotionProvider from "../components/analytics/AnalyticsMotionProvider";
import AnalyticsCapabilities from "../components/analytics/AnalyticsCapabilities";
import AnalyticsPersonalisation from "../components/analytics/AnalyticsPersonalisation";
import AnalyticsInsights from "../components/analytics/AnalyticsInsights";
import AnalyticsSpotlight from "../components/analytics/AnalyticsSpotlight";
import AnalyticsJourney from "../components/analytics/AnalyticsJourney";
import AnalyticsOpportunities from "../components/analytics/AnalyticsOpportunities";
import AnalyticsUpgrade from "../components/analytics/AnalyticsUpgrade";
import AnalyticsResources from "../components/analytics/AnalyticsResources";
import AnalyticsCrm from "../components/analytics/AnalyticsCrm";
import AnalyticsFaq from "../components/analytics/AnalyticsFaq";
import LogoMarquee from "../components/ui/LogoMarquee";
import { acquireLogos } from "../content/acquire";

export const metadata = {
  title: "Customer Analytics & Reporting | Pulse",
  description:
    "Customer analytics, predictive insights, and personalised reporting to understand performance and grow customer loyalty.",
};

export default function AnalyticsPage() {
  return (
    <main className="bg-white text-[#2d2c2b] [&_a:focus-visible]:outline-[3px] [&_a:focus-visible]:outline-offset-[5px] [&_a:focus-visible]:outline-[#8b43fd] [&_button:focus-visible]:outline-[3px] [&_button:focus-visible]:outline-offset-[5px] [&_button:focus-visible]:outline-[#8b43fd] [&_summary:focus-visible]:outline-[3px] [&_summary:focus-visible]:outline-offset-[5px] [&_summary:focus-visible]:outline-[#8b43fd]">
      <AnalyticsHero />
      <AnalyticsMotionProvider>
        <AnalyticsCapabilities />
        <section
          className="pb-10 pt-[72px] text-center max-[700px]:pt-12"
          aria-label="Trusted brands"
        >
          <p className="mb-8 text-sm leading-[1.55] text-[#55514f]">
            Trusted by 1,100+ brands that migrated to Pulse
          </p>
          <LogoMarquee
            logos={acquireLogos}
            wrapperClassName="mx-auto max-w-[1450px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
            trackClassName="flex w-max animate-[acquireLogoMarquee_34s_linear_infinite] items-center motion-reduce:animate-none"
            groupClassName="flex shrink-0 items-center gap-20 pr-20 max-sm:gap-12 max-sm:pr-12"
            imageClassName="h-14 w-[190px] shrink-0 object-contain grayscale max-sm:h-10 max-sm:w-[130px]"
          />
        </section>
      </AnalyticsMotionProvider>
      <AnalyticsPersonalisation />
      <AnalyticsInsights />
      <AnalyticsSpotlight />
      <AnalyticsJourney />
      <AnalyticsOpportunities />
      <AnalyticsUpgrade />
      {/* <AnalyticsResources /> */}
      <AnalyticsCrm />
      <AnalyticsFaq />
    </main>
  );
}
