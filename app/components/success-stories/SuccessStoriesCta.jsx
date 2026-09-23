import Container from "../ui/Container";

const benefits = [
  "Minimal-downtime migration",
  "Subscriber data validated end-to-end",
  "Dedicated migration team",
];

export default function SuccessStoriesCta() {
  return (
    <section className="border-t border-[#f0dfc7] bg-[#fffaf2] py-[108px] text-center max-md:py-16">
      <Container>
        <h2 className="font-[family-name:var(--font-fraunces)] text-[68px] leading-[1.08] text-[#46218b] max-lg:text-[54px] max-md:text-[38px]">
          Ready to see the Pulse difference?
        </h2>
        <div className="mt-10 flex justify-center gap-3 max-lg:flex-wrap max-md:mt-7 max-md:flex-col max-md:items-center">
          {benefits.map((benefit) => (
            <span
              className="border border-[#eadfc9] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.24em] text-[#62419a] max-md:text-[9px]"
              key={benefit}
            >
              <span className="mr-2 text-[#9c3cff]">•</span>
              {benefit}
            </span>
          ))}
        </div>
        <form className="mx-auto mt-[55px] grid max-w-[452px] gap-3 max-md:mt-8">
          <input
            required
            type="email"
            placeholder="Your work email*"
            className="h-[66px] border border-[#eadfc9] bg-white px-6 text-base text-[#555] outline-none placeholder:text-[#aaa]"
          />
          <input
            required
            placeholder="Your store URL*"
            className="h-[66px] border border-[#eadfc9] bg-white px-6 text-base text-[#555] outline-none placeholder:text-[#aaa]"
          />
          <button className="h-[66px] bg-[linear-gradient(100deg,#9237f5,#315be7)] text-base font-semibold text-white">
            Book Free Consultation Call
          </button>
        </form>
      </Container>
    </section>
  );
}
