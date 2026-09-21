import Container from "../ui/Container";
import AnalyticsIntro from "./AnalyticsIntro";
import Visual from "./AnalyticsVisual";
import { insights } from "../../content/analytics";

export default function AnalyticsInsights() {
  return (
    <section className="bg-white py-[100px] max-[700px]:py-[60px]">
      <Container>
        <AnalyticsIntro title={insights.title} description={insights.description} />
        <article className="mb-16 max-[700px]:mb-[35px]">
          <Visual asset={insights.main.asset} alt={insights.main.alt} className="object-contain" />
          <p className="pt-6 text-base leading-[1.55] text-[#55514f] max-[700px]:pt-[18px]">{insights.main.description}</p>
        </article>
        <div className="grid grid-cols-2 gap-7 max-[700px]:grid-cols-1">
          {insights.cards.map(card => (
            <article key={card.asset}>
              <Visual asset={card.asset} alt={card.alt} className="aspect-square object-contain" />
              <p className="pt-6 text-base leading-[1.55] text-[#55514f] max-[700px]:pt-[18px]">{card.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
