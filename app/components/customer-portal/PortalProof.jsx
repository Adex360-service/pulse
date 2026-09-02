import Container from "../ui/Container";
import { portalCdn } from "../../content/customerPortal";

export default function PortalProof() {
  return <section className="min-h-[560px] bg-[#9f83d3] bg-cover bg-center py-24" style={{ backgroundImage: `url("${portalCdn}/68482cf5510bb1293ef04acc_Group%2048096235.svg")` }}><Container className="grid grid-cols-[280px_1fr] items-start gap-16 pt-16 max-md:grid-cols-1 max-md:pt-0 max-md:text-center"><img src={`${portalCdn}/69d79d719b7599ff44475531_EverEden-logo%201.avif`} alt="EverEden" className="mx-auto max-h-24 max-w-[230px] object-contain brightness-0 invert" /><div><h2 className="max-w-[820px] font-[family-name:var(--font-display)] text-[46px] leading-[1.08] text-[#2d155f] max-sm:text-3xl">8X subscriber growth, 156% YoY subscription increase, 20% higher conversion rates</h2><p className="mt-8 max-w-[860px] text-base leading-relaxed text-[#2d155f]">“Fantastic team, smart and responsive. A true extension of our internal team.<br />Solid technology with unique commercial features that have helped us scale our subscription business!”</p></div></Container></section>;
}
