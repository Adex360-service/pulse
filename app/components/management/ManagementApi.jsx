import Container from "../ui/Container";
import ManagementButton from "./ManagementButton";
export default function ManagementApi({ section }) {
  return (
    <section className="bg-[linear-gradient(180deg,#f7efff_0%,#fff0e8_100%)] pt-[100px] pb-[200px] max-md:py-16">
      <Container>
        <div className="flex items-end justify-between gap-8 max-md:block">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-[48px] leading-[1.2] font-normal text-[#281466] max-sm:text-[32px]">
              {section.title}
            </h2>
            <p className="mt-4 max-w-[850px] text-[20px] leading-[1.3] font-light text-[#62605d]">
              {section.copy}
            </p>
          </div>
          <ManagementButton className="min-h-[58px] min-w-[232px] max-md:mt-8" />
        </div>
        <div className="mt-[80px] grid grid-cols-[1fr_1fr_1.12fr] gap-6 max-md:mt-12 max-md:grid-cols-1">
          {section.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[20px] border-2 border-white bg-white/70 p-6"
            >
              <img src={card.icon} alt="" className="h-16 w-16 rounded-2xl" />
              <h3 className="mt-6 text-[20px] font-semibold">{card.title}</h3>
              <ul className="mt-5 space-y-2 text-[16px] leading-5 font-light text-[#62605d]">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
          <img
            src={section.codeImage}
            alt="Loop Storefront API code example"
            className="h-full max-h-[310px] w-full rounded-[20px] object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
