import Container from "../ui/Container";
import AcquireButton from "./AcquireButton";
import { acquireCdn } from "../../content/acquire";

export default function AcquireCta() {
  return <section className="min-h-[470px] bg-[#f9cfd6] bg-cover bg-bottom bg-no-repeat py-24 text-center" style={{ backgroundImage: `url("${acquireCdn}/6853fbbef823385bb2f3abb9_Group%2048096264.avif")` }}><Container className="flex flex-col items-center"><h2 className="font-[family-name:var(--font-display)] text-[48px] text-[#2d155f] max-sm:text-4xl">Ready to scale your subscription business?</h2><p className="my-8 text-xl text-[#39246b]">Join 2,400+ Shopify subscription brands on Loop.</p><AcquireButton outline>Talk to sales</AcquireButton></Container></section>;
}
