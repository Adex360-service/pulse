import SectionIntro from "./SectionIntro";

export default function Pricing() {
  return (
    <section id="contact" className="pricing section-pad">
      <div className="shell narrow pricing-center">
        <SectionIntro eyebrow="Shows up at the right pricing" light>A premium Shopify subscription platform.<br />Without the premium price tag.</SectionIntro>
        <a href="#" className="primary-button">See full pricing breakdown</a>
      </div>
    </section>
  );
}
