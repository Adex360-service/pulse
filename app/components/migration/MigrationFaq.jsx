import Container from "../ui/Container";

export default function MigrationFaq({ items }) {
  return <section className="py-[125px] max-sm:py-16"><Container className="max-w-[1040px]"><h2 className="text-center font-[family-name:var(--font-fraunces)] text-[42px] font-semibold max-sm:text-[34px]">Frequently asked questions</h2><div className="mt-14 grid grid-cols-2 gap-x-16 max-md:grid-cols-1">{items.map(([question, answer]) => <details key={question} className="group border-b border-[#dedbe2] py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#2e2834] marker:hidden">{question}<span className="text-xl font-normal transition-transform group-open:rotate-45">+</span></summary><p className="pt-4 pr-8 text-sm leading-[1.55] text-[#716a77]">{answer}</p></details>)}</div></Container></section>;
}
