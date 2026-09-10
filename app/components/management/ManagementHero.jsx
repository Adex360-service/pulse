import LogoMarquee from "../ui/LogoMarquee";
import ManagementButton from "./ManagementButton";
export default function ManagementHero({ content, logos }) {
  return (
    <section
      className="relative box-border h-[730px] overflow-hidden bg-[#e5f3ff] px-5 pt-[100px] pb-8 text-center text-[#281466] max-md:h-auto max-md:pt-16 max-md:pb-28"
      style={{
        backgroundImage: `url("${content.background}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="mx-auto max-w-[900px]">
        <p className="text-[16px] font-semibold text-[#8b43fd]">
          {content.eyebrow}
        </p>
        <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-[clamp(48px,5vw,72px)] leading-[1.05] font-normal">
          {content.title}
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-[20px] leading-[1.3] font-light text-[#62605d]">
          {content.copy}
        </p>
        <div className="mt-8">
          <ManagementButton>Book demo</ManagementButton>
        </div>
      </div>
      <div className="mx-auto mt-[70px] max-w-[1280px]">
        <p className="mb-8 text-[16px] font-light text-[#897cb6]">
          {content.trusted}
        </p>
        <LogoMarquee
          logos={logos}
          wrapperClassName="overflow-hidden"
          trackClassName="flex w-max animate-[marquee_28s_linear_infinite]"
          groupClassName="flex shrink-0 items-center gap-16 pr-16"
          imageClassName="h-9 w-[130px] object-contain grayscale"
        />
      </div>
    </section>
  );
}
