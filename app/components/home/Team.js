import SectionIntro from "./SectionIntro";

export default function Team({ reviews }) {
  return (
    <>
      <section className="team section-pad">
        <div className="shell narrow team-grid">
          <div>
            <SectionIntro eyebrow="Shows up as your team" light>Real people. In your<br />dedicated <em>Slack</em><br />channel.</SectionIntro>
            <p className="team-desc">A dedicated CSM as your growth partner. Tight SLAs. A dedicated support POC as your execution hand.</p>
          </div>
          <div className="team-visual" />
        </div>
      </section>
      <section className="review-strip">
        <div className="review-track">
          {reviews.concat(reviews).map(([brand, meta, quote, image], index) => (
            <article key={`${brand}-${index}`}><div><b>{brand}</b><small>{meta}</small><p>“{quote}”</p></div><span style={{ backgroundImage: `url("${image}")` }} /></article>
          ))}
        </div>
      </section>
    </>
  );
}
