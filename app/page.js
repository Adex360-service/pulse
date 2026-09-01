import Header from "./components/Header";
import Footer from "./components/Footer";
import ResultsAccordion from "./components/ResultsAccordion";

const logos = [
  [
    "Four Sigmatic",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019e840ef849aa1369bb0f_5.avif",
  ],
  [
    "Mammaly",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019e8519a34adcf73a52d4_6.avif",
  ],
  [
    "OSEA Malibu",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019e85643fb04b1a57fe42_4.avif",
  ],
  [
    "Beam",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019e842703fa2f50269f65_3.avif",
  ],
  [
    "MaryRuth's",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019e8425739b7f8b6b93f8_2.avif",
  ],
  [
    "Primal Queen",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019e85a43a416f99f5042b_7.avif",
  ],
  [
    "Good Protein",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019e860e6893720e9f707d_14.avif",
  ],
  [
    "goPure",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a19bcede90e7b3973bebcaa_Gopure-white-logo.avif",
  ],
];
const problems = [
  "Subscription churn keeps going up, no matter what you try.",
  "Revenue is leaking, data is hard to find and harder to understand.",
  "Your CSM only shows up when you raise a ticket.",
  "You're paying premium for the basics.",
];
const reviews = [
  [
    "Mammaly",
    "Migrated from Recharge",
    "Our Success Manager has been fantastic.",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019b4c6026d55554aa7264_Rectangle%203425.avif",
  ],
  [
    "Hello Bello",
    "Migrated from Recharge",
    "Their commitment to long-term partnerships and 24/7 support stands out.",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019b4ed0faa0f83cf72454_Rectangle%203426%20(1).avif",
  ],
  [
    "Be Amazing",
    "Migrated from Recharge",
    "A+ support makes Loop my favorite piece of SaaS.",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019b4da4281f06d8e79521_Rectangle%203425%20(2).avif",
  ],
  [
    "Primal Queen",
    "Migrated from Skio",
    "Team is super responsive and is constantly helping us.",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a01991d53dd2869270df263_Rectangle%203426.avif",
  ],
];
const features = [
  [
    "SELF-SERVE PORTAL",
    "Zero support tickets.",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a01d10a32e5518362133437_f86c95807cc98e2155c326d740b9d3b8_Ka%20%281%29.avif",
  ],
  [
    "FAILED PAYMENT RECOVERY",
    "Recover failed payments on autopilot.",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/69e8742173b56d4f3bb494e6_13ff0ec2f40214c3eb376c209cb54937_Container%20%289%29.avif",
  ],
  [
    "CANCELLATION FLOWS",
    "Turn cancellations into saves.",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a031ed1918f7065cad53fcc_Benefits%20and%20Offers%20Page%20(6).avif",
  ],
  [
    "GROW AOV",
    "Grow AOV from your existing subscribers.",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a01d10a4ad808b75a424958_ProductUpsell.avif",
  ],
  [
    "SURPRISE & DELIGHT",
    "Turn subscribers into superfans.",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a0324d2b79121644658a2d5_Customer%20portal%20(2).avif",
  ],
  [
    "OPERATIONS",
    "Scale without the manual work.",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a0325107fb8d31184a54eec_Frame%201618874917.avif",
  ],
  [
    "SUBSCRIPTION ANALYTICS",
    "See it. Know why. Fix it.",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a01d10985c2920e03e0a8a3_Frame%201618874730.avif",
  ],
];
const steps = [
  [
    "Week 1",
    "Kickoff",
    "Audit your setup, map your data, and build the plan together.",
  ],
  [
    "Week 2–3",
    "Build & configure",
    "Your portal, flows, and integrations rebuilt on Loop.",
  ],
  [
    "Week 3–4",
    "Test & validate",
    "Every subscription and edge case verified before launch.",
  ],
  ["Go live", "You're on Loop", "Subscribers never notice. You do."],
];

function Intro({ eyebrow, children, light = false }) {
  return (
    <div className={"section-intro " + (light ? "text-white" : "")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
    </div>
  );
}
function Hero() {
  return (
    <>
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source
            src="https://res.cloudinary.com/dfzgt5gjg/video/upload/f_webm,q_70,w_1280/v1780318711/Loop-hero-Video-New_qs6lut_rao1by.webm"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/dfzgt5gjg/video/upload/v1780318711/Loop-hero-Video-New_qs6lut_rao1by.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="rating">
            650+ &nbsp;5.0 <b>★</b>&nbsp; reviews on{" "}
            <strong>shopify app store</strong>
          </div>
          <h1>
            The last
            <br />
            subscription platform
            <br />
            you&apos;ll ever need.
          </h1>
          <a className="primary-button" href="#contact">
            Book your consultation call <span>→</span>
          </a>
        </div>
      </section>
      <section className="logo-rail">
        <p>Trusted by 2400+ Shopify subscription brands</p>
        <div className="narrow">
          {logos.map(([name, image]) => (
            <span
              className="brand-logo"
              key={name}
              role="img"
              aria-label={name}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
function Problems() {
  return (
    <section className="problems section-pad">
      <div className="shell narrow">
        <Intro>We know why you are here</Intro>
        <div className="problem-list">
          {problems.map((x, i) => (
            <article className="problem" key={x}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <i>↘</i>
              <p>{x}</p>
            </article>
          ))}
        </div>
        <div className="answer">
          <p>Every one of those problems?</p>
          <h3>Loop shows up.</h3>
        </div>
      </div>
    </section>
  );
}
function Team() {
  return (
    <>
      <section className="team section-pad">
        <div className="shell narrow team-grid">
          <div>
            <Intro eyebrow="Shows up as your team" light>
              Real people. In your
              <br />
              dedicated <em>Slack</em>
              <br />
              channel.
            </Intro>
            <p className="team-desc">
              A dedicated CSM as your growth partner. Tight SLAs. A dedicated
              support POC as your execution hand.
            </p>
          </div>
          <div className="team-visual" />
        </div>
      </section>
      <section className="review-strip">
        <div className="review-track">
          {reviews.concat(reviews).map(([brand, meta, quote, image], i) => (
            <article key={brand + i}>
              <div>
                <b>{brand}</b>
                <small>{meta}</small>
                <p>“{quote}”</p>
              </div>
              <span style={{ backgroundImage: `url("${image}")` }} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
function FeatureCard({ feature, index }) {
  const [label, title, image] = feature;
  if (index === 2)
    return (
      <article className="feature-wide">
        <span>{label}</span>
        <h3>{title}</h3>
        <div className="stages">
          {[
            image,
            "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a031e42c36b44616c25dca8_Benefits%20and%20Offers%20Page%20(5).avif",
            "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a031ef45904b6980ce76bf0_Benefits%20and%20Offers%20Page%20(8).avif",
          ].map((src, i) => (
            <div key={src}>
              <small>STAGE {i + 1}</small>
              <span style={{ backgroundImage: `url("${src}")` }} />
            </div>
          ))}
        </div>
      </article>
    );
  return (
    <article>
      <span>{label}</span>
      <h3>{title}</h3>
      <div
        className="feature-shot"
        style={{ backgroundImage: `url("${image}")` }}
      />
    </article>
  );
}
function Platform() {
  return (
    <section id="platform" className="platform section-pad">
      <div className="shell narrow">
        <Intro eyebrow="Shows up as your platform">
          <em>Built</em> for how you run subscriptions
          <br />
          on Shopify
        </Intro>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <FeatureCard key={feature[1]} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
function Migration() {
  return (
    <section id="migration" className="migration section-pad">
      <div className="shell narrow">
        <Intro eyebrow="Shows up for the switch" light>
          That <em>migration fear?</em>
          <br />
          We handle the whole thing.
        </Intro>
        <p className="lead">
          1100+ brands migrated to Loop. Here&apos;s what it looks like.
        </p>
        <div className="timeline">
          {steps.map(([time, title, copy], i) => (
            <article key={title}>
              <span>{i + 1}</span>
              <small>{time}</small>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="migration-cta">
          <p>Ready to make the switch?</p>
          <a className="white-button" href="#contact">
            Let&apos;s talk about your migration →
          </a>
        </div>
      </div>
    </section>
  );
}
function Pricing() {
  return (
    <section id="contact" className="pricing section-pad">
      <div className="shell narrow pricing-center">
        <Intro eyebrow="Shows up at the right pricing" light>
          A premium Shopify subscription platform.
          <br />
          Without the premium price tag.
        </Intro>
        <a href="#" className="primary-button">
          See full pricing breakdown
        </a>
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Team />
        <Platform />
        <ResultsAccordion />
        <Migration />
        <Pricing />
      </main>
      <Footer />
      <button className="chat-bubble" aria-label="Open support chat">
        <span>□</span>
      </button>
    </>
  );
}
