import SectionIntro from "./SectionIntro";

export default function Problems({ items }) {
  return (
    <section className="problems section-pad">
      <div className="shell narrow">
        <SectionIntro>We know why you are here</SectionIntro>
        <div className="problem-list">
          {items.map((problem, index) => (
            <article className="problem" key={problem}>
              <span>{String(index + 1).padStart(2, "0")}</span><i>↘</i><p>{problem}</p>
            </article>
          ))}
        </div>
        <div className="answer"><p>Every one of those problems?</p><h3>Loop shows up.</h3></div>
      </div>
    </section>
  );
}
