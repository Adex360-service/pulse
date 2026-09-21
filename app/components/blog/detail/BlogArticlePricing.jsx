export default function BlogArticlePricing({ cards }) {
  return (
    <div className="my-6 grid grid-cols-3 gap-3 bg-[#f5f0e6] p-3 max-sm:grid-cols-1">
      {cards.map(card => (
        <div key={card.name} className="min-w-0 bg-white p-4">
          <h3 className="text-xs text-[#79716b]">{card.name}</h3>
          <p className="my-4 whitespace-nowrap font-[family-name:var(--font-fraunces)] text-[32px] leading-none font-normal tracking-[-1px] max-md:text-[28px]">{card.amount.replace('/mo', '')}<span className="text-[.55em]">/mo</span></p>
          <p className="text-xs leading-[1.55] text-[#79716b]">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
