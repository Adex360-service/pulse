import SubscriptionCta from "../ui/SubscriptionCta";
import { portalCdn } from "../../content/customerPortal";

export default function PortalCta() {
  return <SubscriptionCta backgroundImage={`${portalCdn}/6853fbbef823385bb2f3abb9_Group%2048096264.avif`} sectionClassName="relative min-h-[470px] overflow-hidden bg-[#f9d4da] bg-cover bg-center bg-no-repeat py-24 text-center" containerClassName="relative z-10 flex flex-col items-center" headingClassName="font-[family-name:var(--font-display)] text-[48px] leading-tight text-[#2d155f] max-sm:text-4xl" copyClassName="my-7 text-xl text-[#4b3473]" />;
}
