export default function SectionIntro({ eyebrow, children, light = false }) {
  return (
    <div className={`section-intro${light ? " text-white" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{children}</h2>
    </div>
  );
}
