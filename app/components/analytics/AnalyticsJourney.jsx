import Container from "../ui/Container";
import AnalyticsIntro from "./AnalyticsIntro";
import AnalyticsFeaturePanels from "./AnalyticsFeaturePanels";
import { journey } from "../../content/analytics";

export default function AnalyticsJourney() {
  return (
    <section className="py-[100px] max-[700px]:py-[60px]">
      <Container>
        <AnalyticsIntro title={journey.title} />
        <AnalyticsFeaturePanels items={journey.items} />
      </Container>
    </section>
  );
}
