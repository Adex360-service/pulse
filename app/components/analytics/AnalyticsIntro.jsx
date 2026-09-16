export default function AnalyticsIntro({ title, description, align = "center", compact = false }) {
  return (
    <div className={compact
      ? "mx-auto mb-7 max-w-[700px] text-center"
      : align === "left"
        ? "mr-auto mb-20 max-w-[720px] text-left max-[700px]:mb-[35px]"
        : "mx-auto mb-20 max-w-[850px] text-center max-[700px]:mb-10"}>
      <h2 className="font-[family-name:var(--font-fraunces)] text-[clamp(32px,3.25vw,48px)] leading-[1.12] font-normal tracking-[-1px]">{title}</h2>
      {description && <p className="mx-auto mt-6 max-w-[720px] text-lg leading-[1.55] text-[#55514f] max-[700px]:text-[17px]">{description}</p>}
    </div>
  );
}
