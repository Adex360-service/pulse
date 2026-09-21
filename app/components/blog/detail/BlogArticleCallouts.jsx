export default function BlogArticleCallouts({ cards }) {
  return (
    <div className="my-7 grid gap-3">
      {cards.map((card, index) => (
        <aside key={card.title} className={`border bg-[#faf8f3] px-6 py-5 ${index === cards.length - 1 ? "border-[#bd8bff]" : "border-[#e3dfd8]"}`}>
          <h3 className="mb-2 font-[family-name:var(--font-fraunces)] text-[21px] leading-[1.2] font-normal">{card.title}</h3>
          <p className="text-[15px] leading-[1.6] text-[#625d59]">{card.text}</p>
        </aside>
      ))}
    </div>
  );
}
