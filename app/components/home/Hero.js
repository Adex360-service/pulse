export default function Hero({ logos }) {
  return (
    <>
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="https://res.cloudinary.com/dfzgt5gjg/video/upload/f_webm,q_70,w_1280/v1780318711/Loop-hero-Video-New_qs6lut_rao1by.webm" type="video/webm" />
          <source src="https://res.cloudinary.com/dfzgt5gjg/video/upload/v1780318711/Loop-hero-Video-New_qs6lut_rao1by.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="rating">650+ &nbsp;5.0 <b>★</b>&nbsp; reviews on <strong>shopify app store</strong></div>
          <h1>The last<br />subscription platform<br />you&apos;ll ever need.</h1>
          <a className="primary-button" href="#contact">Book your consultation call <span>→</span></a>
        </div>
      </section>
      <section className="logo-rail">
        <p>Trusted by 2400+ Shopify subscription brands</p>
        <div className="narrow">
          {logos.map(([name, image]) => (
            <span className="brand-logo" key={name} role="img" aria-label={name} style={{ backgroundImage: `url("${image}")` }} />
          ))}
        </div>
      </section>
    </>
  );
}
