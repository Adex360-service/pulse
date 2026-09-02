const cdn = "https://cdn.prod.website-files.com/625e799b877c107387cdf3ac";

export const plans = [
  { name: "Starter", subtitle: "For brands launching subscriptions", price: "$99", rate: "1.0%", action: "Start 14 days free trial", label: "Key features include", features: ["Failed payment recovery", "Cancellation prevention", "Self-serve customer portal", "Subscription bundles", "Out-of-stock protection", "30+ integrations"] },
  { name: "Pro", subtitle: "For brands scaling subscriptions", price: "$399", rate: "0.75%", action: "Book a demo", label: "Everything in Starter, plus", best: true, features: ["Dedicated CSM", "Surprise & delight flows", "Run targeted campaigns", "Prepaid & gifting", "Multi-language portal capability", "API & webhooks access"] },
  { name: "Enterprise", subtitle: "For brands operating at scale", price: "Let's talk", rate: "Negotiable", action: "Contact sales", label: "Everything in Pro, plus", features: ["Volume-based pricing", "Custom development", "Custom contract terms", "Tailored onboarding & support"] },
];

export const featureGroups = [
  ["Retention", ["Streaks", "Mystery rewards", "Subscriber reward journey", "Automation flows", "Personalized cancellation flows", "Cancellation flow A/B testing", "Smart dunning management", "Dunning payment methods", "Failed decline handling", "Quick action links"]],
  ["Acquire", ["Selling plans", "Customizable storefront", "Build your own bundles", "Prepaid bundles", "Checkout upsells", "Checkout blocks", "Bundle SDK & API"]],
  ["Grow · upsells & upgrades", ["Gifting", "Subscription add-ons", "Personalized portal", "Product upsells", "Product + frequency upgrade", "Volume discounts", "Surprise & delight"]],
  ["Campaigns", ["Customer cohorts", "Bulk actions"]],
  ["Subscription core", ["Flexible subscription plans", "Seller-friendly migrations", "Inventory controls", "One-time products"]],
  ["Subscription types", ["Prepaid subscriptions", "Physical subscriptions", "Gift subscriptions", "Split billing", "Better-to-refill swap", "Ongoing order sequence"]],
  ["Communications & messaging", ["Upcoming order emails", "Custom notification branding", "Multi-language portal", "Email content editing", "Custom email domain"]],
  ["Analytics & reporting", ["Subscriber dashboard", "Revenue analytics", "Retention cohort analysis", "Exportable reports", "Subscription analytics"]],
  ["Developer & integrations", ["Shopify native APIs", "Integrations", "REST APIs", "Admin REST API", "Webhooks with custom properties", "Shopify UI blocks"]],
  ["Setup & operations", ["Bulk subscription actions", "Custom flow triggers", "Order processing management", "Order scheduling rules", "Subscription shipping rules", "Custom tags", "Customer notes", "Custom payment changes", "Advanced pause options", "Merchant portal", "Customer history"]],
  ["Support & services", ["Email support", "Dedicated CSM & Slack", "Quarterly business reviews", "Priority chat support"]],
  ["Migration & onboarding", ["White-glove migration", "Data field preservation", "Post-migration support"]],
];

export const pricingLogos = ["6a1749906a7f64a67377eea9_MaryRuth%27s.avif","695f59db3ac6ecfec3d98af1_beam%20logo.avif","693155cccf6ae165cf378166_da92936f87a08067014237b8e93e362f_Osea_logo%201.avif","6787b65aaed4d532114189d9_02f468355288e927bd4407ba627d1dcd_four%20sigmatic.webp","685e53436ca0deeacf7b1f83_0c_mammaly_logo.avif","676d553050bafd5307b7be3a_fc2b4d0d042bf4f4eec9c36492c3c6e1_image-2.svg","6a17421a54ca45eed23f86ab_livingood-daily.webp","676d553046108810914966d8_image%208.svg","685e5378a8381fa26f4dc1eb_7_Prolon_New_Logo.avif","6a33a7e2aabf812536598d28_image%20179.avif","67e3e72c438fd6263a3e02d8_image%2069.webp","6a33a86dad12c16ba40ebdef_theearthingco.avif","6a33a8a2bef6ad85735ee83c_kittyspout.avif","6a33a8d3ff3cd64e6d5b4030_image%20178.avif","6a072677ea4009845ce62077_Alaya_Naturals_Logo%201.avif","67ed1207a69be0dee4f1e095_Skinesa_logo.webp","69d79d719b7599ff44475531_EverEden-logo%201.avif","6a33aa26ff3cd64e6d5c07ee_biom.avif"].map((file) => `${cdn}/${file}`);

export const pricingFaqs = ["How much does Loop cost?", "Does Loop charge a per-order fee?", "Does Loop charge setup fees, migration fees, or hidden charges?", "Does Loop charge for add-ons or have hidden fees?", "What kind of support does Loop offer?", "What will Loop cost at my order volume?"];
