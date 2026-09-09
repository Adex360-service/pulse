import SubscriptionCta from "../ui/SubscriptionCta";
import { acquireCdn } from "../../content/acquire";

export default function AcquireCta() {
  return <SubscriptionCta backgroundImage={`${acquireCdn}/6853fbbef823385bb2f3abb9_Group%2048096264.avif`} sectionClassName="min-h-[470px] bg-[#f9cfd6] bg-cover bg-bottom bg-no-repeat py-24 text-center" containerClassName="flex flex-col items-center" headingClassName="font-[family-name:var(--font-display)] text-[48px] text-[#2d155f] max-sm:text-4xl" copyClassName="my-8 text-xl text-[#39246b]" />;
}
