import SectionIntro from "./SectionIntro";

export default function Migration({ steps }) {
  return (
    <section id="migration" className="migration section-pad">
      <div className="shell narrow">
        <SectionIntro eyebrow="Shows up for the switch" light>That <em>migration fear?</em><br />We handle the whole thing.</SectionIntro>
        <p className="lead">1100+ brands migrated to Loop. Here&apos;s what it looks like.</p>
        <div className="timeline">
          {steps.map(([time, title, copy], index) => (
            <article key={title}><span>{index + 1}</span><small>{time}</small><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
        <div className="migration-cta"><p>Ready to make the switch?</p><a className="white-button" href="#contact">Let&apos;s talk about your migration →</a></div>
      </div>
    </section>
  );
}
