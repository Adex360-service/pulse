import PhaseJourney from "../components/retention/PhaseJourney";
import RetentionConsultation from "../components/retention/RetentionConsultation";
import RetentionHero from "../components/retention/RetentionHero";
import RetentionStories from "../components/retention/RetentionStories";
import RetentionZone from "../components/retention/RetentionZone";
import ZoneNavigator from "../components/retention/ZoneNavigator";
import TextAccordion from "../components/TextAccordion";
import {
  retentionClouds,
  retentionCopy,
  retentionHeroCards,
  retentionPhases,
  retentionStories,
  retentionZones,
  whatsappFaqs,
} from "../content/retention";

export const metadata = {
  title: "How to reduce churn of your ecommerce business | Loop Subscriptions",
  description:
    "Learn how Loop helps Shopify ecommerce brands improve subscriber retention and reduce churn.",
};

export default function Retention() {
  return (
    <main className="overflow-clip">
      <RetentionHero content={retentionCopy.hero} cards={retentionHeroCards} />
      <PhaseJourney
        content={retentionCopy.journey}
        clouds={retentionClouds}
        phases={retentionPhases}
      />
      {retentionZones.map((zone, index) => (
        <RetentionZone zone={zone} index={index} key={zone.id} />
      ))}
      <ZoneNavigator zones={retentionZones} />
      <RetentionConsultation content={retentionCopy.consultation} />
      <RetentionStories stories={retentionStories} clouds={retentionClouds} />
      <TextAccordion items={whatsappFaqs} />
    </main>
  );
}
