import Container from "./ui/Container";

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
    <footer id="resources" className="bg-white px-0 pt-20 pb-6 text-[#262522]">
      <Container>
        <div className="grid grid-cols-4 gap-[70px] max-lg:grid-cols-2 max-sm:gap-x-5 max-sm:gap-y-[35px]">
          {groups.map((column, i) => (
            <div key={i}>
              {column.map(([title, ...links]) => (
                <section className="mb-[22px]" key={title}>
                  <h3 className="mb-[15px] text-base leading-[1.2] font-bold">{title}</h3>
                  {links.map((link) => <a className="mb-3 block text-sm text-[#363432]" href="#" key={link}>{link}</a>)}
                </section>
              ))}
              {i === 3 && (
                <form className="mt-[25px] rounded-3xl border border-[#e4e0dd] p-5">
                  <b className="text-sm font-bold">Subscribe for latest updates</b>
                  <p className="my-3 text-sm text-[#76716c]">Get subscription insights in your inbox</p>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input className="h-10 w-full rounded-xl border border-[#dedade] px-3" id="email" type="email" placeholder="Enter your email" />
                  <button className="mt-3 h-11 w-full rounded-full border-0 bg-[linear-gradient(90deg,#b274ff,#6f9bf5)] text-white">Subscribe</button>
                </form>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 border-y border-[#eee] py-5 max-lg:flex-wrap">
          <a className="h-[42px] w-[106px] shrink-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/64d64c3870a418ff730a354c_91ae17956a95542ff4276cdbb7f25676_loop.png")' }} href="#top" aria-label="Loop home" />
          <a className="h-[54px] w-[178px] shrink-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/63906d8c10a19843247091b5_Shopify-App-Store-Badge-Final-White.png")' }} href="https://apps.shopify.com/loop-subscriptions" target="_blank" rel="noreferrer" aria-label="Find Loop on the Shopify App Store" />
          <nav className="ml-auto flex gap-3 text-[13px] max-lg:ml-0 max-lg:w-full max-lg:flex-wrap max-sm:text-[11px]" aria-label="Legal links">
            <a href="#">Careers</a><i>•</i><a href="#">Terms of Service</a><i>•</i><a href="#">Cookie Policy</a><i>•</i><a href="#">Privacy Policy</a><i>•</i><a href="#">California ARL</a>
          </nav>
        </div>

        <div className="flex min-h-[58px] items-center justify-between text-[11px] text-[#777] max-sm:items-start max-sm:pt-4">
          <div className="flex items-center gap-4">
            {socialLinks.map(([label, href, icon]) => (
              <a className="block h-6 w-6 shrink-0 bg-contain bg-center bg-no-repeat" key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} style={{ backgroundImage: `url("${icon}")` }} />
            ))}
          </div>
          <p>© Loop Solutions 2021 - 2026. All rights reserved.</p>
          <a className="text-[13px] text-[#8b43fd]" href="#top">Back to top <span className="ml-[7px] inline-block text-[22px] leading-none" aria-hidden="true">↑</span></a>
        </div>
      </Container>
    </footer>
  );
}
