import Footer from "../components/Footer";
import Header from "../components/Header";
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
      <Header />
      <main className="overflow-hidden bg-white text-[#2d155f]">
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
      </main>
      <Footer />
      <button
        className="fixed right-6 bottom-6 z-[90] grid h-[58px] w-[58px] cursor-pointer place-items-center rounded-full border-0 bg-[#7726ff] text-white shadow-[0_7px_20px_#31126b55]"
        aria-label="Open support chat"
      >
        <span className="relative h-[19px] w-[23px] rounded-[3px] border-2 border-current text-[0] after:absolute after:bottom-[-7px] after:left-[3px] after:h-[7px] after:w-[7px] after:-skew-y-[35deg] after:border-l-2 after:border-white">□</span>
      </button>
    </>
  );
}
