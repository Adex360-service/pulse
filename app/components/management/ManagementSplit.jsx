import Container from "../ui/Container";
export default function ManagementSplit({ section, reverse = false }) {
  return (
    <section className="bg-[#fffdfd] py-[120px] max-md:py-16">
      <Container className="grid grid-cols-2 items-center gap-[100px] max-md:grid-cols-1">
        <div className={reverse ? "md:order-2" : ""}>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[48px] leading-[1.2] font-normal text-[#281466] max-sm:text-[32px]">
            {section.title}
          </h2>
          <p className="mt-8 text-[20px] leading-[1.3] font-light text-[#62605d]">
            {section.copy}
          </p>
          <div className="mt-10 space-y-8">
            {section.points.map((point) => (
              <div key={point.title}>
                <div className="flex items-center gap-3">
                  <img src={point.icon} alt="" className="h-6 w-6 shrink-0" />
                  <h3 className="text-[20px] font-medium text-[#2d2c2b]">
                    {point.title}
                  </h3>
                </div>
                <p className="mt-5 text-[16px] leading-5 font-light text-[#62605d]">
                  • {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={`flex justify-center ${reverse ? "md:order-1" : ""}`}>
          <img
            src={section.image}
            alt=""
            className="max-h-[560px] max-w-full object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
