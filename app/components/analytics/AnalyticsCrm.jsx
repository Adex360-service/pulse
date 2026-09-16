import Container from "../ui/Container";
import Visual from "./AnalyticsVisual";
import { crm } from "../../content/analytics";

export default function AnalyticsCrm() {
  return (
    <section className="bg-[#202122] py-[100px] text-white max-[700px]:py-[60px]">
      <Container>
        <div className="grid grid-cols-[1fr_1.3fr] items-center gap-16 max-[1000px]:gap-[30px] max-[700px]:grid-cols-1">
          <Visual asset="ba4d0" alt="Connected B2C customer relationship management platform" />
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-[38px] leading-[1.12] font-normal tracking-[-1px]">{crm.title}</h2>
            <div className="mt-[30px] flex flex-wrap gap-2.5">
              {crm.links.map(([label, path]) => <a className="border border-[#7e7d7a] px-3 py-[9px] text-[13px]" key={path} href={`https://www.klaviyo.com/uk/solutions/${path}`}>{label}</a>)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
