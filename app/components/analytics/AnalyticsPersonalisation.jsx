import Container from "../ui/Container";
import AnalyticsIntro from "./AnalyticsIntro";
import AnalyticsFeaturePanels from "./AnalyticsFeaturePanels";
import { personalisation } from "../../content/analytics";

export default function AnalyticsPersonalisation() {
  return (
    <section className="py-[100px] max-[700px]:py-[60px]">
      <Container>
        <AnalyticsIntro title={personalisation.title} description={personalisation.description} />
        <AnalyticsFeaturePanels items={personalisation.items} />
      </Container>
    </section>
  );
}
