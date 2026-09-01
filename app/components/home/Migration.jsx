import SectionIntro from "./SectionIntro";
import Container from "../ui/Container";

export default function Migration({ steps }) {
  return (
    <section
      id="migration"
      className="min-h-[750px] bg-[#24104d] py-[150px] pb-[70px] text-white max-sm:min-h-0 max-sm:py-[55px]"
    >
      <Container>
        <SectionIntro
          eyebrow="Shows up for the switch"
          light
          eyebrowClassName="mb-[22px] text-xs"
          headingClassName="text-[64px] leading-[1.05] max-sm:text-[40px]"
        >
          That <em>migration fear?</em>
          <br />
          We handle the whole thing.
        </SectionIntro>
        <p className="mt-[22px] text-base text-[#b7a8ca]">
          1100+ brands migrated to Loop. Here&apos;s what it looks like.
        </p>
        <div className="mt-[110px] grid grid-cols-4 border-t border-[#76559b] max-sm:mt-[60px] max-sm:grid-cols-1 max-sm:border-t-0 max-sm:border-l">
          {steps.map(([time, title, copy], index) => (
            <article
              className="relative min-h-[230px] pr-7 pt-[30px] max-sm:min-h-0 max-sm:pb-[34px] max-sm:pl-7"
              key={title}
            >
              <span className="absolute -top-[5px] h-2.5 w-2.5 rounded-full bg-[#8b43fd] text-[0] max-sm:top-0 max-sm:-left-[5px]" />
              <small className="font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#c0b0d1]">
                {time}
              </small>
              <h3 className="my-[18px] mb-2 font-[family-name:var(--font-fraunces)] text-[21px]">
                {title}
              </h3>
              <p className="text-sm leading-[1.5] text-[#ae9fbe]">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-y border-[#76559b] py-7 max-sm:gap-5">
          <p className="font-[family-name:var(--font-fraunces)] text-lg italic text-[#9a87b4]">
            Ready to make the switch?
          </p>
          <a
            className="rounded-[3px] bg-white px-[26px] py-4 text-[13px] font-semibold text-[#3b197f]"
            href="#contact"
          >
            Let&apos;s talk about your migration →
          </a>
        </div>
      </Container>
    </section>
  );
}
