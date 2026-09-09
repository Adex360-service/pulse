import Container from "../ui/Container";
import AcquireButton from "./AcquireButton";
import AcquireFeatureCard from "./AcquireFeatureCard";
import { acquireCdn } from "../../content/acquire";

export default function AcquireWidgets({ features }) {
  return (
    <section className="bg-[linear-gradient(135deg,#fff8f8,#ffe8dc)] py-24">
      <Container>
        <div className="flex items-center justify-between gap-8 max-md:flex-col max-md:items-start">
          <div><h2 className="font-[family-name:var(--font-display)] text-[48px] leading-tight text-[#2d155f] max-sm:text-4xl">Widget conversion rate optimization</h2><p className="mt-3 text-xl text-[#746c72]">Fast, seamless widgets that feel like part of your brand and convert visitors on the spot.</p></div>
          <AcquireButton>Get expert advice</AcquireButton>
        </div>
        <div className="mt-20 grid grid-cols-[1.35fr_1fr_1fr] gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="flex min-h-[410px] items-center justify-center max-lg:col-span-2 max-md:col-span-1"><img src={`${acquireCdn}/685d303e996658f873cd47ba_4f3dad4dcb9cffd296f534dbb3852082_Group%2048096249.webp`} alt="Subscription widget interface" className="h-full max-h-[450px] w-full object-contain" /></div>
          {features.map((feature) => <AcquireFeatureCard key={feature.title} feature={feature} />)}
        </div>
      </Container>
    </section>
  );
}
