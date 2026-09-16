import Container from "../ui/Container";
import AnalyticsIntro from "./AnalyticsIntro";
import Visual from "./AnalyticsVisual";
import { resources } from "../../content/analytics";

export default function AnalyticsResources() {
  return (
    <section className="bg-[#202122] py-[100px] text-white max-[700px]:py-[60px]">
      <Container>
        <AnalyticsIntro title={resources.title} align="left" />
        <div className="grid grid-cols-4 gap-7 max-[1000px]:grid-cols-2 max-[440px]:grid-cols-1">
          {resources.cards.map(card => (
            <article className="flex flex-col gap-[18px]" key={card.title}>
              <Visual asset={card.asset} alt={card.title} className="aspect-[3/2] object-cover" />
              <h3 className="font-[family-name:var(--font-fraunces)] text-[21px] leading-[1.3] font-semibold">{card.title}</h3>
              <a className="mt-auto text-sm underline underline-offset-4" href={card.href}>{card.label} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
