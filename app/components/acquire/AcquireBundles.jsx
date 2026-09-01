import Container from "../ui/Container";
import AcquireButton from "./AcquireButton";
import AcquireFeatureCard from "./AcquireFeatureCard";
import { acquireCdn } from "../../content/acquire";

export default function AcquireBundles({ features }) {
  return <section className="bg-[linear-gradient(135deg,#fff8f8,#ffe8dc)] py-28"><Container className="grid grid-cols-2 items-center gap-20 max-lg:grid-cols-1"><img src={`${acquireCdn}/685d2d9809e6d65eb97675bf_Group%2048096237.png`} alt="Build your own bundle interface" className="w-full object-contain" /><div><h2 className="font-[family-name:var(--font-display)] text-[48px] leading-tight text-[#2d155f] max-sm:text-4xl">Sell BYOB &amp; Preset Bundles</h2><p className="mt-5 text-xl text-[#746d73]">Pre-built bundle templates that boost AOV and make choosing easy for customers.</p><div className="mt-8"><AcquireButton href="/feature/bundle-builder">Checkout bundles</AcquireButton></div><div className="mt-12 grid grid-cols-2 gap-8 max-sm:grid-cols-1">{features.map((feature) => <AcquireFeatureCard key={feature.title} feature={feature} />)}</div></div></Container></section>;
}
