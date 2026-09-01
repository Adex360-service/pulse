import Container from "../ui/Container";

function LogoMarquee({ items }) {
  const repeated = items.concat(items);
  return <div className="overflow-hidden"><div className="flex w-max items-center gap-[66px] py-1 [animation:migrationLogoMarquee_36s_linear_infinite] motion-reduce:animate-none">{repeated.map(([name, src], index) => <span key={`${name}-${index}`} role="img" aria-label={index < items.length ? name : undefined} aria-hidden={index >= items.length} className="block h-[52px] w-[170px] shrink-0 bg-contain bg-center bg-no-repeat brightness-0 invert max-sm:h-9 max-sm:w-[125px]" style={{ backgroundImage: `url("${src}")` }} />)}</div></div>;
}

export default function MigrationTrust({ firstRow, secondRow, metrics }) {
  return (
    <section className="relative bg-[#3d1784] pb-[140px] pt-10 text-white max-sm:pb-28">
      <p className="mb-5 text-center text-[18px] font-medium">Trusted by 1100+ brands that migrated to Loop</p>
      <div className="mx-auto max-w-[1280px] overflow-hidden max-sm:max-w-none"><LogoMarquee items={firstRow} /><div className="mt-[44px]"><LogoMarquee items={secondRow} /></div></div>
      <div className="absolute inset-x-0 bottom-0 translate-y-[57%]"><Container className="grid max-w-[1228px] grid-cols-3 gap-[140px] max-lg:gap-12 max-md:gap-4">{metrics.map(([value, label, suffix]) => <article key={label} className="min-h-[174px] rounded-[22px] bg-[linear-gradient(140deg,#fff_30%,#e4e5fa)] px-7 py-7 text-[#2e126d] shadow-[0_20px_50px_#43237828] max-sm:min-h-[104px] max-sm:px-4 max-sm:py-5"><p className="font-[family-name:var(--font-fraunces)] text-[61px] leading-none font-semibold max-sm:text-[32px]">{value}{suffix && <sup className="ml-0.5 text-[30px]">{suffix}</sup>}</p><p className="mt-4 text-base text-[#7a65d6] md:text-xl max-sm:mt-3">{label}</p></article>)}</Container></div>
    </section>
  );
}
