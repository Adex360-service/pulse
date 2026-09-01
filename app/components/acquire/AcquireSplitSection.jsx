import Container from "../ui/Container";

function Feature({ feature }) {
  return <div><div className="flex items-center gap-3"><img src={feature.icon} alt="" className="h-7 w-7 object-contain" /><h3 className="text-[22px] font-semibold text-[#32146d]">{feature.title}</h3></div><ul className="mt-3 space-y-1 pl-6 text-[16px] leading-relaxed text-[#746d73]">{feature.bullets.map((bullet) => <li key={bullet} className="list-disc">{bullet}</li>)}</ul></div>;
}

export default function AcquireSplitSection({ title, description, features, image, imageAlt, reverse = false, children, tinted = false }) {
  return (
    <section className={tinted ? "bg-[linear-gradient(#fff8f4,#fff_55%,#f8f3ff)] py-28" : "bg-white py-28"}>
      <Container className={`grid grid-cols-2 items-center gap-20 max-md:grid-cols-1 ${reverse ? "" : ""}`}>
        <div className={reverse ? "order-2 max-md:order-1" : ""}>
          <h2 className="font-[family-name:var(--font-display)] text-[48px] leading-[1.08] text-[#2d155f] max-sm:text-4xl">{title}</h2>
          <p className="mt-6 max-w-[580px] text-xl leading-[1.4] text-[#746d73]">{description}</p>
          {children}
          <div className="mt-8 space-y-10">{features.map((feature) => <Feature key={feature.title} feature={feature} />)}</div>
        </div>
        <div className={reverse ? "order-1 max-md:order-2" : ""}><img src={image} alt={imageAlt} className="mx-auto max-h-[620px] w-full object-contain" /></div>
      </Container>
    </section>
  );
}
