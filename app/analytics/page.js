import AnalyticsHero from "../components/analytics/AnalyticsHero";
import AnalyticsMotionProvider from "../components/analytics/AnalyticsMotionProvider";
import AnalyticsCapabilities from "../components/analytics/AnalyticsCapabilities";
import AnalyticsBrands from "../components/analytics/AnalyticsBrands";
import AnalyticsPersonalisation from "../components/analytics/AnalyticsPersonalisation";
import AnalyticsInsights from "../components/analytics/AnalyticsInsights";
import AnalyticsSpotlight from "../components/analytics/AnalyticsSpotlight";
import AnalyticsJourney from "../components/analytics/AnalyticsJourney";
import AnalyticsOpportunities from "../components/analytics/AnalyticsOpportunities";
import AnalyticsUpgrade from "../components/analytics/AnalyticsUpgrade";
import AnalyticsResources from "../components/analytics/AnalyticsResources";
import AnalyticsCrm from "../components/analytics/AnalyticsCrm";
import AnalyticsFaq from "../components/analytics/AnalyticsFaq";

export const metadata = {
  title: "Customer Analytics & Reporting | Pulse",
  description: "Customer analytics, predictive insights, and personalised reporting to understand performance and grow customer loyalty.",
};

export default function AnalyticsPage() {
  return (
    <main className="bg-white text-[#2d2c2b] [&_a:focus-visible]:outline-[3px] [&_a:focus-visible]:outline-offset-[5px] [&_a:focus-visible]:outline-[#8b43fd] [&_button:focus-visible]:outline-[3px] [&_button:focus-visible]:outline-offset-[5px] [&_button:focus-visible]:outline-[#8b43fd] [&_summary:focus-visible]:outline-[3px] [&_summary:focus-visible]:outline-offset-[5px] [&_summary:focus-visible]:outline-[#8b43fd]">
      <AnalyticsHero />
      <AnalyticsMotionProvider>
        <AnalyticsCapabilities />
        <AnalyticsBrands />
      </AnalyticsMotionProvider>
      <AnalyticsPersonalisation />
      <AnalyticsInsights />
      <AnalyticsSpotlight />
      <AnalyticsJourney />
      <AnalyticsOpportunities />
      <AnalyticsUpgrade />
      <AnalyticsResources />
      <AnalyticsCrm />
      <AnalyticsFaq />
    </main>
  );
}
