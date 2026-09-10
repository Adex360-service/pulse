import ManagementApi from "../components/management/ManagementApi";
import ManagementCardGrid from "../components/management/ManagementCardGrid";
import ManagementHero from "../components/management/ManagementHero";
import ManagementSplit from "../components/management/ManagementSplit";
import SubscriptionCta from "../components/ui/SubscriptionCta";
import {
  alerts,
  apiSection,
  automation,
  bulk,
  inventory,
  managementCta,
  managementHero,
  managementLogos,
} from "../content/management";

export const metadata = {
  title: "Best Subscription Management App for Shopify | Loop Subscriptions",
  description:
    "Scale your recurring revenue with Loop. Automate, customize, and optimize Shopify subscriptions effortlessly.",
};

export default function ManagementFeaturesPage() {
  return (
    <main>
      <ManagementHero content={managementHero} logos={managementLogos} />
      <ManagementCardGrid section={automation} />
      <ManagementSplit section={bulk} />
      <ManagementCardGrid section={alerts} />
      <ManagementSplit section={inventory} reverse />
      <ManagementApi section={apiSection} />
      <SubscriptionCta
        backgroundImage={managementCta.background}
        sectionClassName="bg-[#ffd8e4] bg-cover bg-center py-28 text-center"
        containerClassName="max-w-[900px]"
        headingClassName="font-[family-name:var(--font-fraunces)] text-[48px] font-semibold text-[#35136d] max-sm:text-[36px]"
        copyClassName="mt-5 mb-8 text-[#655873]"
        title={managementCta.title}
        copy={managementCta.copy}
      />
    </main>
  );
}
