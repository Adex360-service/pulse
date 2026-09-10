import SectionIntro from "./SectionIntro";
import Container from "../ui/Container";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="contact" className="min-h-[510px] bg-[linear-gradient(110deg,#b9705d,#bd836c_43%,#986d91_76%,#856d92)] py-[120px] max-sm:min-h-[380px] max-sm:py-[55px]">
      <Container className="text-center">
        <SectionIntro eyebrow="Shows up at the right pricing" light centered eyebrowClassName="mb-[22px] text-xs" headingClassName="text-[62px] leading-[1.05] max-sm:text-[40px]">A premium Shopify subscription platform.<br />Without the premium price tag.</SectionIntro>
        <Link href="/pricing" className="mt-[38px] inline-flex items-center justify-center rounded-[14px] bg-[#7a20fa] px-7 py-[17px] text-[13px] font-semibold text-white">See full pricing breakdown</Link>
      </Container>
    </section>
  );
}
