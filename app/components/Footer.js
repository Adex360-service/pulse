const groups = [
  [["Product", "Acquire", "Retain", "Manage"], ["Features", "Loop Flows", "Cancellation Flows", "Dunning Management", "Bundles", "Customer Portal", "Upsell & Cross Sell"]],
  [["Get Started", "Migration", "Integrations", "Pricing"], ["Compare", "Loop vs. Recharge", "Loop vs. Skio", "Loop vs. Stay AI", "Loop vs. Ordergroove"]],
  [["Resources", "Blogs", "Events", "Merchant’s features templates"], ["Success Stories", "Case Studies", "Wall of Love"], ["Partners", "Partners", "Agency Partner Directory"]],
  [["Support", "Help Center", "Developer hub", "View Demo Store"]],
];

const socialLinks = [
  ["LinkedIn", "https://www.linkedin.com/company/loop-subscriptions/", "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6854085c01fb83cd8094dda7_LinkedIn.svg"],
  ["X", "https://x.com/LoopEngine", "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6854085c80196d6694b9398a_X.svg"],
  ["YouTube", "https://www.youtube.com/@loopsubscriptions", "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6854086ef705d3ca105afd03_YouTube.svg"],
];

export default function Footer() {
  return (
    <footer id="resources">
      <div className="shell narrow">
        <div className="footer-grid">
          {groups.map((column, i) => (
            <div className="footer-column" key={i}>
              {column.map(([title, ...links]) => (
                <section key={title}>
                  <h3>{title}</h3>
                  {links.map((link) => <a href="#" key={link}>{link}</a>)}
                </section>
              ))}
              {i === 3 && (
                <form className="footer-form">
                  <b>Subscribe for latest updates</b>
                  <p>Get subscription insights in your inbox</p>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="Enter your email" />
                  <button>Subscribe</button>
                </form>
              )}
            </div>
          ))}
        </div>

        <div className="footer-brand">
          <a className="footer-logo footer-logo-image" href="#top" aria-label="Loop home" />
          <a className="shopify-badge" href="https://apps.shopify.com/loop-subscriptions" target="_blank" rel="noreferrer" aria-label="Find Loop on the Shopify App Store" />
          <nav aria-label="Legal links">
            <a href="#">Careers</a><i>•</i><a href="#">Terms of Service</a><i>•</i><a href="#">Cookie Policy</a><i>•</i><a href="#">Privacy Policy</a><i>•</i><a href="#">California ARL</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="socials">
            {socialLinks.map(([label, href, icon]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} style={{ backgroundImage: `url("${icon}")` }} />
            ))}
          </div>
          <p>© Loop Solutions 2021 - 2026. All rights reserved.</p>
          <a className="back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
