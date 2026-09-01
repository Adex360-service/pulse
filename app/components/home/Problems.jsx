import SectionIntro from "./SectionIntro";
import Container from "../ui/Container";

export default function Problems({ items }) {
  return (
    <section className="bg-white py-[95px] max-sm:py-[55px]">
      <Container>
        <SectionIntro headingClassName="text-[46px] max-sm:text-[35px]">We know why you are here</SectionIntro>
        <div className="mt-[34px] grid grid-cols-4 gap-4 max-lg:grid-cols-2">
          {items.map((problem) => (
            <article className="relative flex min-h-[185px] flex-col justify-end overflow-hidden bg-[linear-gradient(140deg,#f4eaff_0%,#f8e5ef_58%,#f8dddd_100%)] px-[18px] py-5 max-sm:min-h-[145px]" key={problem}>
              <span className="absolute top-[22px] left-[18px] block h-[58px] w-[58px] bg-contain bg-center bg-no-repeat" aria-hidden="true" style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a0329deba25ddd297c23cc9_Group%2048096372.avif")' }} />
              <p className="relative z-[1] mb-[18px] w-full text-[15px] leading-[1.35] font-medium text-[#3b197f]">{problem}</p>
            </article>
          ))}
        </div>
        <div className="relative mt-[35px] text-center before:absolute before:top-[22px] before:left-0 before:w-[34%] before:border-t-[5px] before:border-dotted before:border-[#a76aff] after:absolute after:top-[22px] after:right-0 after:w-[34%] after:border-t-[5px] after:border-dotted after:border-[#a76aff] max-sm:before:w-[21%] max-sm:after:w-[21%]"><p className="text-[10px] tracking-[1.5px] uppercase">Every one of those problems?</p><h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-[66px] leading-none font-normal tracking-[-1.5px] text-[#3b197f] max-sm:text-[42px]">Loop shows up.</h3></div>
      </Container>
    </section>
  );
}
