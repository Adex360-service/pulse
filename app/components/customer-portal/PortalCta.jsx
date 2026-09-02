import Container from "../ui/Container";
import AcquireButton from "../acquire/AcquireButton";
import { portalCdn } from "../../content/customerPortal";

export default function PortalCta() {
  return <section className="relative min-h-[470px] overflow-hidden bg-[#f9d4da] bg-cover bg-center bg-no-repeat py-24 text-center" style={{ backgroundImage: `url(${portalCdn}/6853fbbef823385bb2f3abb9_Group%2048096264.avif)` }}><Container className="relative z-10 flex flex-col items-center"><h2 className="font-[family-name:var(--font-display)] text-[48px] leading-tight text-[#2d155f] max-sm:text-4xl">Ready to scale your subscription business?</h2><p className="my-7 text-xl text-[#4b3473]">Join 2,400+ Shopify subscription brands on Loop.</p><AcquireButton outline>Talk to sales</AcquireButton></Container></section>;
}
