export const migrationCdn = "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac";

export const firstLogoRow = [
  ["OSEA", `${migrationCdn}/685503c4c975cfc8b23faaa0_16_osea-logo.avif`],
  ["Four Sigmatic", `${migrationCdn}/685503c23e40b07ab26f0c6a_11_four-sigmatic-logo.avif`],
  ["Mammaly", `${migrationCdn}/685503c41d66419fa6029c66_10_mammaly_logo.avif`],
  ["Primal Queen", `${migrationCdn}/685503c22a3612f44f42f414_1_Primal_queen_logo.avif`],
  ["goPure", `${migrationCdn}/685503c2e4db941df64fe6ff_2_goPure_Logo.png`],
  ["Livingood Daily", `${migrationCdn}/685503c24f0f75feb5651787_3_Livingood_Daily_Logo.png`],
  ["BB Company", `${migrationCdn}/685503c3be96b65a89e210e4_4_BB_Company_Logo.png`],
  ["Kitty Poo Club", `${migrationCdn}/685503c2ecfbd1277c087ee1_5_Kitty_Poo_club_logo.png`],
];

export const secondLogoRow = [
  ["Because", `${migrationCdn}/685503c1515d0a522726b5f8_6_Because_New_logo.avif`],
  ["Prolon", `${migrationCdn}/685503c2b3de7d5f1e19de98_7_Prolon_New_Logo.png`],
  ["Good Protein", `${migrationCdn}/685503c264213f062154b5d2_8_GoodProtein_Logo.png`],
  ["TruHeight", `${migrationCdn}/685503c2336475111c3795bc_9_truHeight_logo.png`],
  ["Because", `${migrationCdn}/685503c1515d0a522726b5f8_6_Because_New_logo.avif`],
  ["Just Thrive", `${migrationCdn}/685503c46d5b6651cb8a46d0_13_Just_Thrivenew_logo.png`],
  ["FÜM", `${migrationCdn}/685503c48238eaa3384b7e93_14_FUM_pipes_logo.png`],
  ["Lumin", `${migrationCdn}/685503c4d58a5e5d816e6a0e_15_LUMIN_logo.png`],
];

export const migrationMetrics = [
  ["Free", "White-Glove Migration"],
  ["40", "Cost savings", "%"],
  ["100", "Built for Scale", "%"],
];

export const migrationSteps = [
  ["Initial assessment & planning", "A migration expert evaluates your current subscription model, product details, and customer data. We create a structured plan outlining tasks, timelines, and responsibilities."],
  ["Subscription data preparation & setup", "We configure subscription data in Loop based on your existing setup. Your subscription details are carefully aligned with Loop’s platform."],
  ["Secure data & payment token transfer", "We execute a complete payment migration that includes customer details, subscriptions, payment tokens, and billing preferences. Automated checks help verify data accuracy."],
  ["Testing & quality assurance", "We run a test migration to validate all key details, customer profiles, addresses, products, payments, billing cycles, discounts, and workflows. A post-migration report confirms everything is transferred accurately."],
  ["Launch & post-launch support", "Launch is scheduled to minimize impact on your operations. After launch, our team provides focused support to address any concerns and optimize your setup."],
];

export const migrationCoverage = [
  [`${migrationCdn}/68626c247e346cb5697e8748_Icon.png`, "Subscription plans & pricing structures", "Transfer of one-time, recurring, or custom subscription models."],
  [`${migrationCdn}/68626fa7adf74d5b986d6178_Icon%20(1).png`, "Secure payment & billing data", "Supported gateways like Stripe, PayPal, Braintree, Authorize.net, and others."],
  [`${migrationCdn}/68626ffcbc6cc0b60c4db5bf_Icon%20(5).png`, "Order count & customer data", "Migration of subscription records, order counts, and user preferences."],
  [`${migrationCdn}/68627002ed29bbe6bc4c3ed9_Icon%20(4).png`, "Discounts, coupons & legacy pricing", "Replication of existing codes, deals, and grandfathered structures."],
  [`${migrationCdn}/6862700cadfbe1b1963c0463_Icon%20(3).png`, "Automation, workflows & integrations", "Includes bulk updates, flows, and external integrations."],
  [`${migrationCdn}/68627016a9de7ac50ad0fc97_Icon%20(2).png`, "Customer self-serve portal", "Preservation of functions such as pause, skip, swap, or reschedule subscriptions."],
];

export const migrationFaqs = [
  ["How long does the migration usually take?", "Timelines vary by complexity, but many migrations wrap up within a few weeks of planning and testing."],
  ["Does migration cause disruptions for customers?", "Our approach is designed to reduce interruptions. We run test migrations and communicate closely to maintain a consistent user experience."],
  ["Can you handle complex discount structures or custom rules?", "We’ve managed a variety of advanced workflows. Our team reviews your current setup and replicates or adapts it within Loop."],
  ["What are the data security considerations?", "We follow recognized best practices for transferring payment tokens and customer information. Specific compliance questions can be addressed during planning."],
  ["Do I need an in-house developer?", "It’s not always necessary. Our dedicated migration team typically handles technical tasks, though collaboration is welcomed for special requirements."],
  ["What is hypercare?", "Hypercare is a focused support window after migration where we actively monitor your setup and quickly address any issues."],
];

export const migrationStories = [
  { label: "Livingood Daily migration story", href: "https://www.loopwork.co/customer-stories/livingood-daily", image: `${migrationCdn}/67efad036ffb565db1ad941a_76c9a69b124a1e66cedffdfa6c909d9d_Overlay%2BShadow.jpg` },
  { label: "Live Bearded migration story", href: "https://www.loopwork.co/customer-stories/live-bearded-scaled-subscriptions-from-5-to-20-of-revenue-in-9-months", image: `${migrationCdn}/67efad81986d89c5c8fe4faf_90c29f7fbd1b447ead34b76d88d0d189_Overlay%2BShadow-2.jpg` },
  { label: "Nutripaw migration story", href: "https://www.loopwork.co/customer-stories/nutripaw-saw-3x-subscription-revenue-growth-with-loop", image: `${migrationCdn}/67efad8117fe8e1ac0402ef5_88c17d0ea9f8527f6cf6560eee7e7224_Overlay%2BShadow-3.jpg` },
];
