import content from "./analytics.json";

const text = (index) => content[index].text;
export const hero = { title: text(0), description: text(1) };
export const capabilities = ["0d05e", "f7369", "3b688", "f0c91"].map(
  (asset, index) => ({
    asset,
    title: text(2 + index * 2),
    description: text(3 + index * 2),
  }),
);
export const personalisation = {
  title: text(11),
  description: text(12),
  items: [
    {
      title: "Spot your strongest segments",
      description: text(13),
      asset: "4ae58",
    },
    {
      title: "Trace what's actually converting",
      description: text(14),
      asset: "530d9",
    },
    {
      title: "Let Pulse tell you what's next",
      description: text(15),
      asset: "446a1",
    },
  ],
};
export const insights = {
  title: text(16),
  description: text(17),
  main: {
    asset: "16d5e",
    alt: "Business performance dashboard",
    description: text(18),
  },
  cards: [
    { asset: "7eb59", alt: "Custom analytics reports", description: text(19) },
    {
      asset: "4ff22",
      alt: "Marketing attribution settings",
      description: text(20),
    },
  ],
};
export const stories = [
  [
    "Rs 10.6M",
    22,
    "/images/Rectangle-91.png",
    "Breakout ",
    "/images/breakoutLogo.png",
    // "https://www.klaviyo.com/customers/case-studies/half-magic",
  ],
  [
    "Rs 7.37M",
    23,
    "/images/Rectangle-92.png",
    "Engine ",
    "/images/Engine_New_Logo-2026_white.avif",
    // "https://www.klaviyo.com/au/customers/case-studies/dr-hydrate",
  ],
  [
    "Rs 8.15M",
    24,
    "/images/Mask-group.png",
    "Cougar",
    "/images/cougarLogo.png",
    // "https://www.klaviyo.com/customers/case-studies/harney-and-sons",
  ],
  [
    "Rs 2.37M",
    25,
    "/images/Mask-group-1.png",
    "Orient",
    "/images/orientLogo.png",
    // "https://www.klaviyo.com/customers/case-studies/tibi",
  ],
].map(([stat, description, asset, name, logo, href]) => ({
  stat,
  description: text(description),
  asset,
  name,
  logo,
  href,
}));
export const journey = {
  title: text(26),
  items: [
    {
      title: "Know who's actually earning revenue",
      description: text(27),
      asset: "23bf0",
    },
    {
      title: "See a customer's full story in one place",
      description: text(28),
      asset: "40414",
    },
    {
      title: "Get warned before it becomes a problem",
      description: text(29),
      asset: "4c6db",
    },
  ],
};
export const opportunities = {
  title: text(30),
  description: text(31),
  cards: [
    {
      asset: "/images/Marketer-1.png",
      alt: "AI-driven testing and audience optimisation",
      description: text(32),
    },
    {
      asset: "/images/Marketer-2.png",
      alt: "Personalised peer benchmarks",
      description: text(33),
    },
    {
      asset: "/images/Marketer-3.png",
      alt: "Marketing recommendations",
      description: text(34),
    },
  ],
};
export const upgrade = { title: text(35), description: text(36) };
export const resources = {
  title: text(37),
  cards: [
    [
      38,
      "b9a6c",
      "Learn about personalised send time",
      "https://www.klaviyo.com/uk/blog/personalized-send-time-optimization",
    ],
    [
      39,
      "59f45",
      "Read the article",
      "https://help.klaviyo.com/hc/en-us/articles/41008338238875",
    ],
    [
      40,
      "fa572",
      "View analytics course",
      "https://academy.klaviyo.com/en-us/courses/optimize-your-analytics",
    ],
    [
      41,
      "f43ef",
      "Browse analytics articles",
      "https://help.klaviyo.com/hc/en-us/categories/115000874048",
    ],
  ].map(([title, asset, label, href]) => ({
    title: text(title),
    asset,
    label,
    href,
  })),
};
export const crm = {
  title: text(42),
  links: [
    ["Email Marketing", "ai"],
    ["WhatsApp Marketing", "marketing-automation"],
    ["Push Notifications", "customer-service"],
  ],
};
export const faqs = {
  title: text(43),
  items: [44, 46, 48, 50, 52, 54].map((index) => ({
    question: text(index),
    answer: text(index + 1),
  })),
};
