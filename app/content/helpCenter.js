import { articleRecords } from "./helpCenterArticles";

const asset = "https://downloads.intercomcdn.com/i/o/kmcpsev1";

export const helpLogo = `${asset}/805987/7de5ddcddd5af361fccbe1ff1d3c/601e4593f30f8da1a2046ace91f9a846.png`;

export const helpCollections = [
  [
    "Getting started",
    `${asset}/806127/717960de646cfe599406035c1b07/77dfcea7089fd23a0649f1bb5b5fffaa.png`,
  ],
  [
    "Best Practices",
    `${asset}/889160/f94866295a4dce8de11b020cb009/f8469aba54fdcb62823efa62be44aea2.png`,
  ],
  [
    "Developer hub",
    `${asset}/806128/686e43ede7efe5448bba1b872a45/4093acae2901810223cc076fb2bc06b3.png`,
  ],
  [
    "Migration",
    `${asset}/806116/08ef4a55ef387cac0fdd918ca64f/b0a775cd884c0f21ee2fb6c813c587da.png`,
  ],
  [
    "Analytics",
    `${asset}/806129/b18bc430b3653bcdc6777a46a764/25e57ab7e5d01e79818e87dc945b65d9.png`,
  ],
  [
    "Campaigns",
    `${asset}/806132/e0d5223910acf8b93a55ac0cd9f9/cb04d62871c65a1e987667be7c0f1ac0.png`,
  ],
  [
    "Acquire",
    `${asset}/806133/576d722475ff8730fd8b4ff80366/6e5fc6e46760246559e283ffa2e5d345.png`,
  ],
  [
    "Grow",
    `${asset}/806138/140e093d56a070b50133a3dbcd24/7a159a536f47c017eb492297bb45c270.png`,
  ],
  [
    "Retain",
    `${asset}/806139/2423b092c1daacc178953881ece9/994d2d446e692d66abad56d9843fbef4.png`,
  ],
  [
    "Experiments",
    `${asset}/818568/67cab72afdfdc137664862479746/d4719ef42cb4046f1be3ce1ee47afbe1.png`,
  ],
  [
    "Integrations",
    `${asset}/806140/7974004e91b12aebc646e7f4dd9a/4c54162046fea14ae4687042af33d42a.png`,
  ],
  [
    "Customer portal",
    `${asset}/806141/e71e3df198a3adfcbcd5d2066a2f/9f4790ac831d819a1746894fa471615c.png`,
  ],
  [
    "Loyalty & Referral",
    `${asset}/806142/bbfad4b7398fe33ed1b865d5a639/8776e8e54f1ae842defac36e2435681a.png`,
  ],
  [
    "Manage subscriptions",
    `${asset}/806143/1a928a0cf8afdfe9a9670bb72423/3774c4cedf047b3d40f6c41f7c0a8614.png`,
  ],
  [
    "Settings",
    `${asset}/809201/131213d65c35691f9344ac93d281/9697cac7866de39719d729e73434526d.png`,
  ],
  [
    "Frequently Asked Questions...",
    `${asset}/910740/a8d9f09181be3665e5c3dc264538/2e1b42e49ab6727a5773ace57b03ed1e.png`,
  ],
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
