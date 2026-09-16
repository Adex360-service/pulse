import Container from "../ui/Container";
import AnalyticsIntro from "./AnalyticsIntro";
import Visual from "./AnalyticsVisual";
import { opportunities } from "../../content/analytics";

export default function AnalyticsOpportunities() {
  return (
    <section className="bg-white py-[100px] max-[700px]:py-[60px]">
      <Container>
        <AnalyticsIntro title={opportunities.title} description={opportunities.description} />
        <div className="grid grid-cols-3 gap-7 max-[700px]:grid-cols-1">
          {opportunities.cards.map(card => (
            <article key={card.asset}>
              <Visual asset={card.asset} alt={card.alt} />
              <p className="mt-6 text-base leading-[1.55] text-[#55514f]">{card.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
