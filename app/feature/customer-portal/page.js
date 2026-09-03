import AcquireResults from "../../components/acquire/AcquireResults";
import PortalBenefits from "../../components/customer-portal/PortalBenefits";
import PortalCta from "../../components/customer-portal/PortalCta";
import PortalFeatureSection from "../../components/customer-portal/PortalFeatureSection";
import PortalHero from "../../components/customer-portal/PortalHero";
import PortalProof from "../../components/customer-portal/PortalProof";
import PortalTrust from "../../components/customer-portal/PortalTrust";
import { resultStories } from "../../content/acquire";
import {
  portalBenefits,
  portalLogos,
  portalSections,
} from "../../content/customerPortal";

export const metadata = {
  title: "Subscription Customer Portal | 100% Customizable & Fast with Loop",
  description:
    "Reduce subscriber tickets with Loop’s Shopify customer portal. Fully customizable, mobile-friendly, and lightning-fast for a seamless subscription management experience.",
};

export default function CustomerPortalPage() {
  return (
    <>
      <div className="overflow-hidden bg-white text-[#2d155f]">
        <PortalHero />
        <PortalTrust logos={portalLogos} />
        <PortalProof />
        {portalSections.map((section, index) => (
          <PortalFeatureSection
            key={section.title}
            section={section}
            index={index}
          />
        ))}
        <AcquireResults stories={resultStories} compact />
        <PortalBenefits groups={portalBenefits} />
        <PortalCta />
      </div>
    </>
  );
}
