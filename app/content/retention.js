const cdn = "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac";

export const retentionCopy = {
  hero: { title: "WhatsApp is a", accent: "Two-Way Conversation", scrollLabel: "Scroll" },
  journey: { title: "Customers move through different moments.", subtitle: "WhatsApp meets them at each one.", proactiveLabel: "Proactive", reactiveLabel: "Reactive" },
  consultation: {
    title: "Book your consultation call",
    buttonLabel: "Book consultation call",
    benefits: ["Subscription audit of your current setup", "Growth opportunity assessment", "Competitive benchmarking insights"],
    review: { count: "650+", rating: "4.9 star reviews on", marketplace: "shopify", suffix: "app store" },
  },
};

export const retentionHeroCards = [
  {
    image: `/images/whatsapp-2.png`,
    title: "Automated messages that reach customers first abandoned cart, abandoned checkout, back-in-stock, and price-drop alerts, sent the moment they matter.",
  },
  {
    image: `/images/whatsapp-1.png`,
    title: "Customers reply, confirm, or cancel an order right inside the chat with tap-to-respond buttons, no click-through to a website needed.",
  },
];

export const retentionPhases = [
  {
    id: "zone-1",
    title: "Cart Recovery ",
    summary: "Win back carts and checkouts before they're lost",
    icon: `${cdn}/68c4030d139e381c565b9ce4_Group%2048096308.avif`,
  },
  {
    id: "zone-2",
    title: "Stock & Price Alerts",
    summary: "Bring customers back the instant a product changes",
    icon: `${cdn}/68c4030d5b9b274286216211_Group%2048096309.avif`,
  },
  {
    id: "zone-3",
    title: "Delivery Updates",
    summary: "Keep them informed after they buy",
    icon: `${cdn}/68c4030d1c722985f6025b35_Group%2048096310.avif`,
  },
  {
    id: "zone-4",
    title: "Order Actions",
    summary: "Customers confirm or cancel right in the chat",
    icon: `${cdn}/68c4030d7fdd608a0e2a758c_Group%2048096311.avif`,
  },
];

export const retentionZones = [
  {
    id: "zone-1",
    eyebrow: "Payback Period",
    accent: "purple",
    description:
      "Most abandoned carts are lost within the first hour before your customer even forgets about them.",
    cards: [
      {
        title: "3-Step Reminder Sequence",
        text: "Automatically send up to three WhatsApp reminders as a cart sits unpurchased  each timed to nudge without feeling pushy.",
        image: `${cdn}/68c409c5be287489f5e2e298_Container.avif`,
      },
      {
        title: "Checkout Recovery",
        text: "Abandoned checkouts get the same three-step treatment recovering carts that made it all the way to payment before dropping off.",
        image: `${cdn}/68c416d4f1da6820af8d8040_352e3b1ebbdf267564c6fbd4da77c857_Mystery%20Box%20%28Retention%20Page%29%20GIF_Updated.gif`,
      },
    ],
  },
  {
    id: "zone-2",
    eyebrow: "Habit → Ritual",
    accent: "blue",
    description:
      "Once a subscriber shows interest, don't let them slip away give them a reason to come back the moment it matters.",
    cards: [
      {
        title: "Back In Stock Alerts",
        text: "The moment a subscribed variant is restocked, customers get a WhatsApp message so they don't miss it twice",
        image: `${cdn}/68c40c1466bfdf1ad2fbd7ee_Reward%20Journey-1.avif`,
      },
      {
        title: "Price Drop Alerts",
        text: "Customers who subscribed to a product are notified the instant its price drops, no manual checking required",
        image: `${cdn}/68c40c14af884c2d54230818_Upsell%20Container.avif`,
      },
      {
        title: "Segmented Targeting",
        text: "Alerts only go to customers who actually showed interest, not your entire subscriber list",
        image: `${cdn}/68c40c1481eeb9e540101b42_4c25135aaeee127e2a62d3ce8ad7c109_Reward%20Journey.svg`,
      },
      {
        title: "Alert Performance Tracking",
        text: "See exactly how many restock or price-drop alerts turn into completed orders",
        image: `${cdn}/68c40c14c75a855a9cc3e9a5_e8ef3c54402b7327d0920a3ba49b7515_Subscription%20Management.webp`,
      },
    ],
  },
  {
    id: "zone-3",
    eyebrow: "VIP Experience",
    accent: "pink",
    description:
      "These subscribers generate the highest LTV. They've built the ritual now ensure they never leave by making them feel truly exclusive.",
    cards: [
      {
        title: "Exclusive Portal Experience",
        text: "Different interface showing VIP status",
        image: `${cdn}/68c40c4c3e359ca5858f85cb_Image.avif`,
      },
      {
        title: "Premium Access",
        text: "First launches, VIP-only products, deeper discounts",
        image: `${cdn}/68c40c4c8bd7dc827b511ae2_Image-1.avif`,
      },
      {
        title: "Advanced Cross-sell",
        text: "Secondary benefits at exclusive pricing",
        image: `${cdn}/68c40c4cceb8dc06f3672f45_Container-1.avif`,
      },
      {
        title: "Personalized Campaigns",
        text: "Milestone celebrations, founder notes",
        image: `${cdn}/68c40c4c014762e065a9f8fd_b82b146b58ea4980466b3dbabd90eb70_Container.png`,
      },
    ],
  },
  {
    id: "zone-4",
    eyebrow: "Cancellation flow",
    accent: "orange",
    description:
      "They clicked cancel. Remind them why they started, find the real reason, offer a solution, and use incentives last.",
    cards: [
      {
        title: "Benefits Pages",
        text: "When users click Cancel, show personalized content on subscription value.",
        image: `${cdn}/68c40d407cd9788ebd08b8dd_ef3557c3bd0a1d28b4a6d6a650554b8a_Container-3.png`,
      },
      {
        title: "Smart Survey",
        text: "Subscribers past the benefits page see a survey capturing cancellation reasons.",
        image: `${cdn}/68c40d4089f7a19b3f66246c_04d4e128380e06486a5373f19d37e3b4_Container-1.png`,
      },
      {
        title: "Alternatives",
        text: "Subscribers select a cancellation reason, and the system suggests alternatives.",
        image: `${cdn}/68c40d404c8e49bed38672b5_b55913fe7112971820f9f82eaf044169_Container-2.png`,
      },
      {
        title: "Offers",
        text: "If subscribers decline options, the system offers incentives based on reasons.",
        image: `${cdn}/68c40d4057d45f1090f47fe0_f95113bfb1402894ebb6e342f46091df_Container.png`,
      },
    ],
  },
];

export const retentionStories = [
  {
    metric: "8X subscriber growth in 3 months",
    quote:
      "Fantastic team, smart and responsive. A true extension of our internal team. Solid technology with unique commercial features that have helped us scale our subscription business! Highly recommended.",
    brand: "EverEden",
    migratedFrom: "Recharge",
    logo: `${cdn}/69d79d719b7599ff44475531_EverEden-logo%201.avif`,
  },
  {
    metric: "Advanced migration wins",
    quote:
      "Loop has been fantastic. When we decided to go headless, we searched for a subscription service with a robust API, knowing we had big plans. Loop has exceeded our expectations...",
    brand: "Keto Chow",
    migratedFrom: "Skio",
    logo: `${cdn}/67f3a88e5fc302da464bcfa3_327915298915a66c471f1cb3155179b4_Keto-chow_logo.svg`,
  },
  {
    metric: "Immediate ROI impact",
    quote:
      "We chose Loop because we were sure its features, especially in churn prevention and upselling, would boost our subscription business. Even with a tight migration deadline, the Loop Migration Team stuck to it 100%...",
    brand: "mammaly",
    migratedFrom: "Recharge",
    logo: `${cdn}/685e53436ca0deeacf7b1f83_0c_mammaly_logo.avif`,
  },
];

export const retentionClouds = [
  `${cdn}/68c4058720072d7785de2f56_clouds1%203.avif`,
  `${cdn}/68c405874c8e49bed383ef7c_clouds1%202.avif`,
];
