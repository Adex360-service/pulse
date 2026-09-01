export default function AcquireFeatureCard({ feature }) {
  return (
    <article className="min-h-[330px] rounded-[22px] border border-white bg-white/65 p-7 shadow-[0_12px_50px_#5634810a] backdrop-blur-sm max-sm:min-h-0">
      <img src={feature.icon} alt="" className="mb-8 h-14 w-14 object-contain" />
      <h3 className="text-[21px] leading-[1.15] font-semibold text-[#17142a]">{feature.title}</h3>
      <ul className="mt-7 space-y-2 pl-5 text-[16px] leading-[1.45] text-[#69626a]">
        {feature.bullets.map((bullet) => <li key={bullet} className="list-disc">{bullet}</li>)}
      </ul>
    </article>
  );
}
