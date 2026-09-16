import Container from "../ui/Container";
import AnalyticsIntro from "./AnalyticsIntro";
import { faqs } from "../../content/analytics";

export default function AnalyticsFaq() {
  return (
    <section className="bg-[#202122] py-[100px] text-white max-[700px]:py-[60px]">
      <Container>
        <div className="grid grid-cols-[1fr_1.5fr] gap-[60px] max-[1000px]:gap-[30px] max-[700px]:grid-cols-1">
          <AnalyticsIntro title={faqs.title} align="left" />
          <div>
            {faqs.items.map(item => (
              <details className="group/faq border-b border-[#454545] py-[18px]" key={item.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold [&::-webkit-details-marker]:hidden">
                  {item.question}<span className="shrink-0 text-[22px] transition-transform duration-200 group-open/faq:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-[18px] text-[15px] leading-[1.55] text-[#d4d2d0]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
