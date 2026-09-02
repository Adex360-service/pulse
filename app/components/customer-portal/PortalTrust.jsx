import Container from "../ui/Container";

export default function PortalTrust({ logos }) {
  return (
    <section className="overflow-hidden bg-[linear-gradient(105deg,#925be7,#8b73d5_50%,#a7a5dd)] py-9 text-white">
      <Container className="overflow-hidden">
        <h2 className="text-2xl font-semibold">
          Trusted by 2400+ Shopify subscription brands
        </h2>
        <div className="mt-7 flex w-max animate-[migrationLogoMarquee_32s_linear_infinite] items-center motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-20 pr-20"
            >
              {logos.map(([name, image]) => (
                <img
                  key={`${copy}-${name}`}
                  src={image}
                  alt={copy ? "" : name}
                  className="h-12 w-[165px] shrink-0 object-contain brightness-0 invert"
                />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
