import { articleRecords } from "./helpCenterArticles";

// const asset = "https://downloads.intercomcdn.com/i/o/kmcpsev1";

export const helpCollections = [
  ["Getting started", `/images/pulse-icons1-01.svg`],
  ["Best Practices", `/images/pulse-icons1-02.svg`],
  ["Developer hub", `/images/pulse-icons1-03.svg`],
  ["Migration", `/images/pulse-icons1-04.svg`],
  ["Automations", `/images/pulse-icons1-05.svg`],
  ["Campaigns", `/images/pulse-icons1-06.svg`],
  ["Email Marketing", `/images/pulse-icons1-07.svg`],
  ["WhatsApp Marketing", `/images/pulse-icons1-08.svg`],
  ["Push Notifications", `/images/pulse-icons1-09.svg`],
  ["Profile", `/images/pulse-icons1-10.svg`],
  ["Segment", `/images/pulse-icons1-11.svg`],
  ["Product Catalog", `/images/pulse-icons1-12.svg`],
  ["Templates", `/images/pulse-icons1-13.svg`],
  ["Popup", `/images/pulse-icons1-14.svg`],
  ["Connectors", `/images/pulse-icons1-16.svg`],
  ["Analytics", `/images/pulse-icons1-15.svg`],
];

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const collectionIds = {
  "Getting started": "collection-getting-started",
  "Best Practices": "collection-best-practices",
  Automations: "collection-analytics",
  "Email Marketing": "collection-acquire",
  "WhatsApp Marketing": "collection-grow",
  "Push Notifications": "collection-retain",
  Profile: "collection-experiments",
  Segment: "collection-integrations",
  "Product Catalog": "collection-customer-portal",
  Templates: "collection-loyalty-and-referral",
  Popup: "collection-manage-subscriptions",
  Connectors: "collection-settings",
  Analytics: "collection-frequently-asked-questions",
};

export const helpCenterCollections = helpCollections.map(([title, icon]) => {
  const id =
    collectionIds[title] ||
    `collection-${toSlug(title.replace(/\.\.\.$/, ""))}`;
  return {
    id,
    title,
    slug: toSlug(title.replace(/\.\.\.$/, "")),
    icon,
    articles: articleRecords.filter((article) => article.collectionId === id),
  };
});

export const helpCenterArticles = helpCenterCollections.flatMap((collection) =>
  collection.articles.map((article) => ({ ...article, collection })),
);
