import SectionIntro from "./SectionIntro";
import Container from "../ui/Container";

function FeatureCard({ feature, index, stages }) {
  const [label, title, image] = feature;
  const cardClass =
    "min-h-[580px] overflow-hidden rounded-lg border border-[#ead8b9] bg-[linear-gradient(145deg,#fff,#fbf3ff)] pt-[26px] max-sm:min-h-[430px]";

  if (index === 2) {
    return (
      <article
        className={`${cardClass} col-span-full !min-h-[610px] max-sm:!min-h-[470px]`}
      >
        <span className="block px-[34px] pt-2.5 text-[11px] tracking-[1.5px] text-[#8b43fd] max-sm:px-[18px]">
          {label}
        </span>
        <h3 className="mx-[34px] mt-[15px] mb-3 font-[family-name:var(--font-inter)] text-[31px] leading-[1.2] font-normal text-[#3b197f] max-sm:mx-[18px] max-sm:text-2xl">
          {title}
        </h3>
        <div className="grid h-[470px] grid-cols-3 gap-4 px-[45px] pt-[30px] max-sm:h-[330px] max-sm:gap-[5px] max-sm:px-[15px] max-sm:pt-[18px]">
          {stages.map((source, stageIndex) => (
            <div className="flex flex-col gap-[18px]" key={source}>
              <small className="text-center text-[10px] tracking-[1px] text-[#b18a48]">
                STAGE {stageIndex + 1}
              </small>
              <span
                className="block flex-1 rounded-t-[10px] bg-contain bg-top bg-no-repeat"
                style={{ backgroundImage: `url("${source}")` }}
              />
            </div>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article
      className={`${cardClass} ${index === 0 || index === 4 ? "col-span-11" : index === 1 || index === 3 ? "col-span-9" : "col-span-10"} max-lg:col-span-1`}
    >
      <span className="block px-[34px] pt-2.5 text-[11px] tracking-[1.5px] text-[#8b43fd] max-sm:px-[18px]">
        {label}
      </span>
      <h3 className="mx-[34px] mt-[15px] mb-3 font-[family-name:var(--font-inter)] text-[31px] leading-[1.2] font-normal text-[#3b197f] max-sm:mx-[18px] max-sm:text-2xl">
        {title}
      </h3>
      <div
        className="h-[450px] bg-contain bg-bottom bg-no-repeat max-sm:h-[310px]"
        style={{ backgroundImage: `url("${image}")` }}
      />
    </article>
  );
}

export default function Platform({ features, cancellationStages }) {
  return (
    <section
      id="platform"
      className="bg-white pt-[100px] pb-[70px] max-sm:pt-16 max-sm:pb-[55px]"
    >
      <Container className="max-w-[1240px]">
        <SectionIntro
          // eyebrow="Shows up as your toolkit"
          centered
          // icon
          eyebrowClassName="mb-[30px] max-sm:mb-5 max-sm:text-[9px] max-sm:tracking-[2.4px]"
          headingClassName="text-[70px] leading-[1.08] max-lg:text-[52px] max-sm:text-[40px]"
        >
          <em className="font-normal text-[#8628ec]">Agents</em> built to run your store while you sleep.
        </SectionIntro>
        <p className="mx-auto mt-[30px] max-w-[700px] text-center text-[18px] leading-[1.5] text-[#666] max-sm:mt-5 max-sm:px-4 max-sm:text-[15px]">
            Two AI agents that understand your brand, your customers, and your catalog
            and act on it automatically, across every channel.
          </p>
        <div className="mt-[70px] grid grid-cols-20 items-stretch gap-2.5 max-lg:grid-cols-1 max-sm:mt-12 max-sm:gap-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature[1]}
              feature={feature}
              index={index}
              stages={cancellationStages}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
