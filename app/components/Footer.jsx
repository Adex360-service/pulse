import Container from "./ui/Container";
import Link from "next/link";

const groups = [
  [
    [
      "Product",
      "Email Marketing",
      "WhatsApp Marketing",
      "Web Push Notifications",
      "Analytics",
    ],
  ],
  [
    [
      "Features",
      "Abandoned Cart Recovery",
      "Customer Retention & Winback",
      "Templates",
      "Customer Segmentation",
      "Delivery Updates",
    ],
  ],
  [
    ["Get Started", "Integrations", "Pricing"],

    ["Resources", "Blogs", "Success Stories"],
  ],
  [["Support", "Help Center", "Developer hub"]],
];

const socialLinks = [
  [
    "LinkedIn",
    "https://www.linkedin.com/company/loop-subscriptions/",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6854085c01fb83cd8094dda7_LinkedIn.svg",
  ],
  [
    "X",
    "https://x.com/LoopEngine",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6854085c80196d6694b9398a_X.svg",
  ],
  [
    "YouTube",
    "https://www.youtube.com/@loopsubscriptions",
    "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6854086ef705d3ca105afd03_YouTube.svg",
  ],
];

const footerLinks = {
  "Email Marketing": "/email-marketing",
  "WhatsApp Marketing": "/whatsapp-marketing",
  "Web Push Notifications": "/web-push-notifications",
  Analytics: "/analytics",
  "Abandoned Cart Recovery": "/email-marketing",
  "Customer Retention & Winback": "/email-marketing",
  Templates: "/email-marketing",
  "Customer Segmentation": "/email-marketing",
  "Delivery Updates": "/email-marketing",
  Integrations: "/integrations",
  Pricing: "/pricing",
  Blogs: "/blog",
  "Success Stories": "/success-stories",
  "Help Center": "/help-center",
  "Developer hub": "/articles/using-loop-webhooks",
};

export default function Footer() {
  return (
    <footer
      id="resources"
      className="bg-white px-0 pt-20 pb-6 text-[#262522] max-sm:pt-14 max-sm:pb-8"
    >
      <Container>
        <div className="grid grid-cols-4 gap-[70px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-0">
          {groups.map((column, i) => (
            <div className="max-sm:w-full" key={i}>
              {column.map(([title, ...links]) => (
                <section className="mb-[22px] max-sm:mb-8" key={title}>
                  <h3 className="mb-[15px] text-base leading-[1.2] font-bold max-sm:text-lg">
                    {title}
                  </h3>
                  {links.filter(Boolean).map((link) => (
                    <Link
                      className="mb-3 block text-sm text-[#363432] max-sm:mb-5 max-sm:text-lg"
                      href={footerLinks[link] || "#"}
                      key={link}
                    >
                      {link}
                    </Link>
                  ))}
                </section>
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 border-y border-[#eee] py-5 max-lg:flex-wrap max-sm:flex-col max-sm:items-start max-sm:gap-4 max-sm:py-6">
          <Link className="w-[106px] shrink-0" href="/" aria-label="Pulse home">
            <img
              src="/images/pulse-logo.png"
              alt="Pulse"
              className="h-auto w-full object-contain"
            />
          </Link>
          <a
            className="h-[54px] w-[178px] shrink-0 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/63906d8c10a19843247091b5_Shopify-App-Store-Badge-Final-White.png")',
            }}
            href="https://apps.shopify.com/loop-subscriptions"
            target="_blank"
            rel="noreferrer"
            aria-label="Find Loop on the Shopify App Store"
          />
          <nav
            className="ml-auto flex gap-3 text-[13px] max-lg:ml-0 max-lg:w-full max-lg:flex-wrap max-sm:mt-2 max-sm:gap-x-3 max-sm:gap-y-4 max-sm:text-base"
            aria-label="Legal links"
          >
            <Link href="/">Terms of Service</Link>
            <i>•</i>
            <Link href="/">Cookie Policy</Link>
            <i>•</i>
            <Link href="/">Privacy Policy</Link>
          </nav>
        </div>

        <div className="flex min-h-[58px] items-center justify-between text-[11px] text-[#777] max-sm:flex-col max-sm:items-start max-sm:gap-5 max-sm:pt-6 max-sm:text-base">
          {/* <div className="flex items-center gap-4">
            {socialLinks.map(([label, href, icon]) => (
              <a
                className="block h-6 w-6 shrink-0 bg-contain bg-center bg-no-repeat"
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                style={{ backgroundImage: `url("${icon}")` }}
              />
            ))}
          </div> */}
          <p className="max-sm:m-0">© Pulse 2026. All rights reserved.</p>
          <Link
            className="text-[13px] text-[#8b43fd] max-sm:text-base"
            href="#top"
          >
            Back to top{" "}
            <span
              className="ml-[7px] inline-block text-[22px] leading-none"
              aria-hidden="true"
            >
              ↑
            </span>
          </Link>
        </div>
      </Container>
    </footer>
  );
}
