import Container from "../ui/Container";
import ManagementButton from "../management/ManagementButton";
import AnalyticsIntro from "./AnalyticsIntro";
import { upgrade } from "../../content/analytics";

export default function AnalyticsUpgrade() {
  return (
    <section className="pt-[100px] pb-[120px] text-center max-[700px]:pt-[60px] max-[700px]:pb-20">
      <Container>
        <AnalyticsIntro title={upgrade.title} description={upgrade.description} compact />
        <ManagementButton href="https://www.klaviyo.com/products/personalization">See advanced features</ManagementButton>
      </Container>
    </section>
  );
}
