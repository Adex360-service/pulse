import Container from "../ui/Container";

export default function PortalBenefits({ groups }) {
  return (
    <section className="bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_62%)] py-24">
      <Container className="grid grid-cols-[0.8fr_1.65fr] items-start gap-14 max-lg:grid-cols-1">
        <h2 className="font-[family-name:var(--font-display)] text-[48px] leading-[1.08] text-[#2d155f] max-sm:text-4xl">Built for Scale,<br />Loved by Customers</h2>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {groups.map((group, groupIndex) => (
            <article key={group.title} className="overflow-hidden rounded-[20px] border-2 border-[#d8bdff] bg-white/85">
              <header className="border-b border-[#dfcefa] px-5 py-4 text-center">
                <h3 className={`mx-auto w-fit rounded-full px-8 py-2 text-sm font-semibold ${groupIndex ? "bg-[#7d24df] text-white" : "bg-[#79e9aa] text-[#174e39]"}`}>{group.title}</h3>
              </header>
              <div className="divide-y divide-[#dfcefa]">
                {group.items.map(([title, description]) => (
                  <div key={title} className="flex gap-4 px-6 py-5">
                    <span className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-bold ${groupIndex ? "bg-[#efe4ff] text-[#7821d8]" : "bg-[#e6ffe9] text-[#28c968]"}`}>✓</span>
                    <div><h4 className="font-semibold text-[#2d155f]">{title}</h4><p className="mt-1 text-sm leading-5 text-[#746d75]">{description}</p></div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
