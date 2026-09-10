import Container from "../ui/Container";
import ManagementButton from "./ManagementButton";
export default function ManagementCardGrid({ section, tone = "peach" }) {
  return (
    <section
      className={`py-[100px] max-md:py-16 ${tone === "lavender" ? "bg-[#f8efff]" : "bg-[linear-gradient(180deg,#f7efff_0%,#fff0e8_100%)]"}`}
    >
      <Container>
        <div className="grid grid-cols-2 gap-14 max-md:grid-cols-1">
          <h2 className="max-w-[500px] font-[family-name:var(--font-fraunces)] text-[48px] leading-[1.2] font-normal text-[#281466] max-sm:text-[32px]">
            {section.title}
          </h2>
          <div>
            <p className="max-w-[590px] text-[20px] font-light leading-[1.3] text-[#62605d]">
              {section.copy}
            </p>
            <div className="mt-8">
              <ManagementButton />
            </div>
          </div>
        </div>
        <div className="mt-[60px] grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {section.cards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[300px] flex-col items-start rounded-[20px] border-2 border-white bg-[linear-gradient(#ffffff99,#fbf8ff99)] p-6"
            >
              <img
                src={card.icon}
                alt=""
                className="h-16 w-16 rounded-2xl max-sm:h-10 max-sm:w-10"
              />
              <h3 className="mt-6 text-[20px] leading-[26px] font-semibold text-[#101827]">
                {card.title}
              </h3>
              <ul className="mt-4 space-y-2 text-[16px] leading-5 font-light text-[#62605d]">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
