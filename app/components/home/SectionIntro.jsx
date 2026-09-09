export default function SectionIntro({
  eyebrow,
  children,
  light = false,
  centered = false,
  icon = false,
  headingClassName = "",
  eyebrowClassName = "",
}) {
  return (
    <div className={`max-w-[1180px] ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-[18px] inline-flex items-center gap-2.5 text-[11px] leading-none font-semibold tracking-[3.2px] uppercase ${light ? "text-white" : "text-[#9b43ff]"} ${eyebrowClassName}`}
        >
          {icon && (
            <svg
              className="h-3.5 w-3.5 shrink-0"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <circle cx="8" cy="4.5" r="2.5" />
              <path d="M2.8 14c.4-3 2.1-4.5 5.2-4.5s4.8 1.5 5.2 4.5" />
            </svg>
          )}
          {eyebrow}
        </p>
      )}
      <h2
        className={`m-0 font-[family-name:var(--font-fraunces)] text-[56px] leading-[1.08] font-normal tracking-[-1.8px] ${light ? "text-white" : "text-[#3b197f]"} max-sm:text-[32px] ${headingClassName}`}
      >
        {children}
      </h2>
    </div>
  );
}
