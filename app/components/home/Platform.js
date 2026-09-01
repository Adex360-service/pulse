import SectionIntro from "./SectionIntro";

function FeatureCard({ feature, index, stages }) {
  const [label, title, image] = feature;

  if (index === 2) {
    return (
      <article className="feature-wide">
        <span>{label}</span><h3>{title}</h3>
        <div className="stages">
          {stages.map((source, stageIndex) => (
            <div key={source}><small>STAGE {stageIndex + 1}</small><span style={{ backgroundImage: `url("${source}")` }} /></div>
          ))}
        </div>
      </article>
    );
  }

  return <article><span>{label}</span><h3>{title}</h3><div className="feature-shot" style={{ backgroundImage: `url("${image}")` }} /></article>;
}

export default function Platform({ features, cancellationStages }) {
  return (
    <section id="platform" className="platform section-pad">
      <div className="shell narrow">
        <SectionIntro eyebrow="Shows up as your platform"><em>Built</em> for how you run subscriptions<br />on Shopify</SectionIntro>
        <div className="feature-grid">{features.map((feature, index) => <FeatureCard key={feature[1]} feature={feature} index={index} stages={cancellationStages} />)}</div>
      </div>
    </section>
  );
}
