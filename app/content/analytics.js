import content from "./analytics.json";

const text = (index) => content[index].text;
export const hero = { title: text(0), description: text(1) };
export const capabilities = ["0d05e", "f7369", "3b688", "f0c91"].map((asset, index) => ({
  asset, title: text(2 + index * 2), description: text(3 + index * 2),
}));
export const trustedHeading = text(10);
export const brandAssets = ["bf38b", "bf70f", "7f3e6", "38e04", "1d144", "74ffa", "76b56", "6b838", "cf58f", "74525", "dbb3e", "d4899", "55e6a", "82c21", "2670a", "21923", "2f464"];
export const personalisation = {
  title: text(11), description: text(12),
  items: [
    { title: "Know where to focus", description: text(13), asset: "4ae58" },
    { title: "Know what converts", description: text(14), asset: "530d9" },
    { title: "Know what’s next", description: text(15), asset: "446a1" },
  ],
};
export const insights = {
  title: text(16), description: text(17),
  main: { asset: "16d5e", alt: "Business performance dashboard", description: text(18) },
  cards: [
    { asset: "7eb59", alt: "Custom analytics reports", description: text(19) },
    { asset: "4ff22", alt: "Marketing attribution settings", description: text(20) },
  ],
};
export const stories = [
  ["110%", 22, "3615f", "Half Magic", "284d8", "https://www.klaviyo.com/customers/case-studies/half-magic"],
  ["26%", 23, "ea04e", "Dr. Hydrate", "802bf", "https://www.klaviyo.com/au/customers/case-studies/dr-hydrate"],
  ["114x", 24, "1ce73", "Harney & Son", "69758", "https://www.klaviyo.com/customers/case-studies/harney-and-sons"],
  ["59%", 25, "caf9a", "Tibi", "b501e", "https://www.klaviyo.com/customers/case-studies/tibi"],
].map(([stat, description, asset, name, logo, href]) => ({ stat, description: text(description), asset, name, logo, href }));
export const journey = {
  title: text(26),
  items: [
    { title: "See what’s driving growth", description: text(27), asset: "23bf0" },
    { title: "Track every touchpoint", description: text(28), asset: "40414" },
    { title: "Catch customer issues early", description: text(29), asset: "4c6db" },
  ],
};
export const opportunities = {
  title: text(30), description: text(31),
  cards: [
    { asset: "8e795", alt: "AI-driven testing and audience optimisation", description: text(32) },
    { asset: "ce26f", alt: "Personalised peer benchmarks", description: text(33) },
    { asset: "90d54", alt: "Marketing recommendations", description: text(34) },
  ],
};
export const upgrade = { title: text(35), description: text(36) };
export const resources = {
  title: text(37),
  cards: [
    [38, "b9a6c", "Learn about personalised send time", "https://www.klaviyo.com/uk/blog/personalized-send-time-optimization"],
    [39, "59f45", "Read the article", "https://help.klaviyo.com/hc/en-us/articles/41008338238875"],
    [40, "fa572", "View analytics course", "https://academy.klaviyo.com/en-us/courses/optimize-your-analytics"],
    [41, "f43ef", "Browse analytics articles", "https://help.klaviyo.com/hc/en-us/categories/115000874048"],
  ].map(([title, asset, label, href]) => ({ title: text(title), asset, label, href })),
};
export const crm = {
  title: text(42),
  links: [["K:AI", "ai"], ["K:Marketing", "marketing-automation"], ["K:Service", "customer-service"], ["K:Data Platform", "customer-data-platform"]],
};
export const faqs = {
  title: text(43),
  items: [44, 46, 48, 50, 52, 54].map(index => ({ question: text(index), answer: text(index + 1) })),
};
