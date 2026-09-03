import MigrationCoverage from "../components/migration/MigrationCoverage";
import MigrationCta from "../components/migration/MigrationCta";
import MigrationExperiences from "../components/migration/MigrationExperiences";
import MigrationFaq from "../components/migration/MigrationFaq";
import MigrationHero from "../components/migration/MigrationHero";
import MigrationProcess from "../components/migration/MigrationProcess";
import MigrationTrust from "../components/migration/MigrationTrust";
import {
  firstLogoRow,
  migrationCoverage,
  migrationFaqs,
  migrationMetrics,
  migrationSteps,
  migrationStories,
  secondLogoRow,
} from "../content/migration";

export const metadata = {
  title: "Seamless Shopify Subscription App Migration | Loop",
  description:
    "Move your subscription business to Loop with dedicated, white-glove migration support.",
};

export default function MigrationPage() {
  return (
    <>
      <div className="overflow-hidden bg-white text-[#2d155f]">
        <MigrationHero />
        <MigrationTrust
          firstRow={firstLogoRow}
          secondRow={secondLogoRow}
          metrics={migrationMetrics}
        />
        <MigrationProcess steps={migrationSteps} />
        <MigrationCoverage items={migrationCoverage} />
        <MigrationExperiences stories={migrationStories} />
        <MigrationFaq items={migrationFaqs} />
        <MigrationCta />
      </div>
    </>
  );
}
