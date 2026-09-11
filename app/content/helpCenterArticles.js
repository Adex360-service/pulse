export const articleRecords = [{
  id: "article-getting-started-with-loop",
  collectionId: "collection-getting-started",
  title: "Getting started with Loop",
  slug: "getting-started-with-loop",
  description: "Learn how to set up, grow, and manage subscriptions with Loop while reducing churn and integrating essential apps.",
  intro: ["Loop is a Shopify subscription app that helps DTC brands grow, manage, and retain subscribers. This guide introduces the essential steps for launching a subscription program.", "Loop offers flexible tools for businesses at every stage, from their first subscriber to an established recurring-revenue program."],
  sections: [{
    id: "getting-started-with-loop-what-are-subscriptions",
    title: "What are subscriptions?",
    html: "Subscriptions let customers receive products automatically on a schedule while Shopify securely stores their payment details."
  }, {
    id: "getting-started-with-loop-types-of-subscriptions",
    title: "Types of subscriptions",
    html: `<p>Choose the subscription model that best matches how customers buy from your brand.</p>
        <ul>
          <li><strong>Standard subscription:</strong> customers are charged before every recurring delivery.</li>
          <li><strong>Prepaid subscription:</strong> customers pay upfront for several scheduled deliveries.</li>
          <li><strong>Gift subscription:</strong> the purchaser pays while deliveries are sent to another recipient.</li>
          <li><strong>Bundle subscription:</strong> customers build a personalized recurring box.</li>
          <li><strong>Trial subscription:</strong> customers begin with an introductory product or price.</li>
          <li><strong>Membership subscription:</strong> customers pay a recurring fee for access or benefits.</li>
        </ul>
        <p>See the <a href="/articles/subscription-overview">subscription overview</a> for more information about each model.</p>`
  }, {
    id: "getting-started-with-loop-setting-up-subscriptions",
    title: "Setting up subscriptions",
    html: `<p>Follow these steps to launch your first subscription with Loop:</p>
        <ol>
          <li>Install Loop in your Shopify store.</li>
          <li>Connect the products you want to offer as subscriptions.</li>
          <li>Create selling plans with the required billing and delivery frequencies.</li>
          <li>Preview and test the complete subscriber experience.</li>
        </ol>
        <table>
          <thead><tr><th>Step</th><th>Action</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Install Loop</td><td>Required</td></tr>
            <tr><td>2</td><td>Connect products</td><td>Required</td></tr>
            <tr><td>3</td><td>Create selling plans</td><td>Required</td></tr>
            <tr><td>4</td><td>Test the experience</td><td>Recommended</td></tr>
          </tbody>
        </table>`
  }, {
    id: "getting-started-with-loop-key-features-to-grow-your-business",
    title: "Key features to grow your business",
    html: "Use bundles, upsells, customer portal actions, loyalty rewards, and automated flows to improve subscriber value."
  }, {
    id: "getting-started-with-loop-reduce-subscriber-churn",
    title: "Reduce subscriber churn",
    html: "Configure cancellation flows, payment retries, pause options, and targeted retention offers for subscribers at risk of leaving."
  }, {
    id: "getting-started-with-loop-integrate-your-apps",
    title: "Integrate your apps",
    html: "Connect Loop with your email, support, analytics, and fulfillment tools to keep subscription data synchronized."
  }, {
    id: "getting-started-with-loop-migrating-from-another-platform",
    title: "Migrating from another platform?",
    html: "Loop's migration team can transfer contracts, customer payment references, products, and renewal schedules with minimal disruption."
  }, {
    id: "getting-started-with-loop-faqs",
    title: "FAQs",
    html: "Review common questions about installation, billing, selling plans, customer accounts, and launching your first subscription."
  }, {
    id: "getting-started-with-loop-need-help",
    title: "Need help?",
    html: "Contact the Loop support team from the chat widget whenever you need help with setup or troubleshooting."
  }]
}, {
  id: "article-subscription-overview",
  collectionId: "collection-getting-started",
  title: "Subscription overview",
  slug: "subscription-overview",
  description: "Understand the subscription models available in Loop and choose the right experience for your products.",
  intro: ["Loop supports multiple subscription models so your program can match the way customers prefer to shop.", "Each model can use its own delivery frequency, billing rules, discounts, and customer experience."],
  sections: [{
    id: "subscription-overview-standard-subscription",
    title: "Standard subscription",
    html: "Customers are charged before each recurring delivery according to the frequency selected in the selling plan."
  }, {
    id: "subscription-overview-prepaid-subscription",
    title: "Prepaid subscription",
    html: "Customers pay upfront for several future deliveries, improving cash flow while creating a longer subscriber commitment."
  }, {
    id: "subscription-overview-gift-subscription",
    title: "Gift subscription",
    html: "A buyer pays for a fixed subscription while each scheduled delivery is sent to the gift recipient."
  }, {
    id: "subscription-overview-build-a-bundle",
    title: "Build a bundle",
    html: "Subscribers create a personalized recurring box by choosing products from the collection rules you configure."
  }, {
    id: "subscription-overview-trial-subscription",
    title: "Trial subscription",
    html: "Offer an introductory product or price before automatically moving the customer to the regular subscription."
  }, {
    id: "subscription-overview-membership-subscription",
    title: "Membership subscription",
    html: "Charge a recurring membership fee in exchange for access, benefits, discounts, or exclusive products."
  }, {
    id: "subscription-overview-faqs",
    title: "FAQs",
    html: "Review answers about billing intervals, prepaid renewals, product eligibility, and combining subscription models."
  }, {
    id: "subscription-overview-api-endpoints-and-webhooks",
    title: "API endpoints and webhooks",
    html: "Use Loop APIs and webhooks to connect subscription events and data with custom business workflows."
  }, {
    id: "subscription-overview-need-help",
    title: "Need help?",
    html: "Contact Loop support for guidance choosing or configuring the right subscription model."
  }]
}, {
  id: "article-subscription-management",
  collectionId: "collection-getting-started",
  title: "Subscription management",
  slug: "subscription-management",
  description: "Learn how merchants and customers can manage active subscriptions, orders, and billing details.",
  intro: ["Loop provides subscription controls for both your support team and your subscribers.", "Changes are recorded against the subscription contract and applied to the appropriate upcoming order."],
  sections: [{
    id: "subscription-management-view-a-subscription",
    title: "View a subscription",
    html: "Open a customer profile to review products, billing frequency, delivery schedule, payment status, and subscription history."
  }, {
    id: "subscription-management-edit-products-and-quantities",
    title: "Edit products and quantities",
    html: "Add, remove, swap, or change the quantity of products while preserving the customer's subscription schedule."
  }, {
    id: "subscription-management-reschedule-or-skip-an-order",
    title: "Reschedule or skip an order",
    html: "Move an upcoming charge date or skip a single order without cancelling the subscription contract."
  }, {
    id: "subscription-management-pause-and-resume",
    title: "Pause and resume",
    html: "Temporarily pause future subscription orders and resume them when the customer is ready."
  }, {
    id: "subscription-management-update-billing-details",
    title: "Update billing details",
    html: "Send customers a secure payment update link when their stored payment method expires or fails."
  }, {
    id: "subscription-management-cancel-a-subscription",
    title: "Cancel a subscription",
    html: "Use cancellation reasons and retention options before completing a cancellation request."
  }, {
    id: "subscription-management-bulk-subscription-actions",
    title: "Bulk subscription actions",
    html: "Apply supported changes to multiple subscriptions from the Loop admin using controlled bulk operations."
  }, {
    id: "subscription-management-troubleshooting",
    title: "Troubleshooting",
    html: "Check activity history and order status to understand why a subscription action or renewal did not complete."
  }, {
    id: "subscription-management-need-help",
    title: "Need help?",
    html: "Contact Loop support with the subscription ID and customer details for faster assistance."
  }]
}, {
  id: "article-successful-subscription-program",
  collectionId: "collection-best-practices",
  title: "How to build a successful subscription program",
  slug: "build-a-successful-subscription-program",
  description: "Practical recommendations for launching and improving a subscription program.",
  intro: ["A strong subscription program combines a valuable recurring offer with a simple customer experience."],
  sections: [{
    id: "how-to-build-a-successful-subscription-program-define-your-offer",
    title: "Define your offer",
    html: "Choose products, incentives, and delivery frequencies that create clear ongoing value."
  }, {
    id: "how-to-build-a-successful-subscription-program-measure-performance",
    title: "Measure performance",
    html: "Track acquisition, retention, churn, and subscriber value to prioritize improvements."
  }, {
    id: "how-to-build-a-successful-subscription-program-need-help",
    title: "Need help?",
    html: "Talk to the Loop team for recommendations tailored to your store."
  }]
}, {
  id: "article-using-loop-webhooks",
  collectionId: "collection-developer-hub",
  title: "Using Loop webhooks",
  slug: "using-loop-webhooks",
  description: "Send subscription events to your connected systems.",
  intro: ["Send subscription events to your connected systems."],
  sections: [{
    id: "using-loop-webhooks-webhook-fundamentals",
    title: "Webhook fundamentals",
    html: "Choose the events your integration needs and verify every request before processing it."
  }, {
    id: "using-loop-webhooks-next-steps",
    title: "Next steps",
    html: "Test webhook delivery and monitor failed requests before enabling production workflows."
  }]
}, {
  id: "article-prepare-store-for-migration",
  collectionId: "collection-migration",
  title: "Prepare your store for migration",
  slug: "prepare-store-for-migration",
  description: "A practical checklist for moving subscription data to Loop.",
  intro: ["Prepare your store and subscription records before migration begins."],
  sections: [{
    id: "prepare-your-store-for-migration-migration-checklist",
    title: "Migration checklist",
    html: "Review products, contracts, payment references, renewal dates, and integrations before migration begins."
  }, {
    id: "prepare-your-store-for-migration-next-steps",
    title: "Next steps",
    html: "Share the validated data with your Loop migration specialist."
  }]
}, {
  id: "article-validate-migrated-subscriptions",
  collectionId: "collection-migration",
  title: "Validate migrated subscriptions",
  slug: "validate-migrated-subscriptions",
  description: "Confirm imported subscriptions before launch.",
  intro: ["Validate a representative sample of imported subscriptions before launch."],
  sections: [{
    id: "validate-migrated-subscriptions-post-migration-checks",
    title: "Post-migration checks",
    html: "Verify customer records, product variants, prices, billing dates, and upcoming orders."
  }, {
    id: "validate-migrated-subscriptions-next-steps",
    title: "Next steps",
    html: "Report discrepancies before activating migrated subscriptions."
  }]
}, {
  id: "article-analytics-dashboard-overview",
  collectionId: "collection-analytics",
  title: "Analytics dashboard overview",
  slug: "analytics-dashboard-overview",
  description: "Understand the most important subscription metrics.",
  intro: ["Use Loop analytics to understand recurring revenue and subscriber behavior."],
  sections: [{
    id: "analytics-dashboard-overview-reading-your-dashboard",
    title: "Reading your dashboard",
    html: "Use revenue, subscriber, churn, and retention reports to monitor subscription performance."
  }, {
    id: "analytics-dashboard-overview-next-steps",
    title: "Next steps",
    html: "Choose the metrics your team will review regularly."
  }]
}, {
  id: "article-create-subscriber-campaign",
  collectionId: "collection-campaigns",
  title: "Create a subscriber campaign",
  slug: "create-subscriber-campaign",
  description: "Build targeted campaigns for your subscribers.",
  intro: ["Campaigns help you deliver timely experiences to selected subscribers."],
  sections: [{
    id: "create-a-subscriber-campaign-campaign-setup",
    title: "Campaign setup",
    html: "Choose an audience, define the campaign action, preview the experience, and schedule the launch."
  }, {
    id: "create-a-subscriber-campaign-next-steps",
    title: "Next steps",
    html: "Measure campaign engagement and subscriber outcomes."
  }]
}, {
  id: "article-campaign-audience-rules",
  collectionId: "collection-campaigns",
  title: "Campaign audience rules",
  slug: "campaign-audience-rules",
  description: "Target the right subscriber segment.",
  intro: ["Audience rules determine which subscribers enter a campaign."],
  sections: [{
    id: "campaign-audience-rules-audience-filters",
    title: "Audience filters",
    html: "Combine product, order, customer, and subscription conditions to create focused audiences."
  }, {
    id: "campaign-audience-rules-next-steps",
    title: "Next steps",
    html: "Preview the audience before publishing your campaign."
  }]
}, {
  id: "article-launch-subscription-widget",
  collectionId: "collection-acquire",
  title: "Launch a subscription widget",
  slug: "launch-subscription-widget",
  description: "Add subscription purchasing options to your storefront.",
  intro: ["Use the subscription widget to present recurring purchase options."],
  sections: [{
    id: "launch-a-subscription-widget-widget-setup",
    title: "Widget setup",
    html: "Select eligible products, configure selling-plan options, and preview the widget in your storefront theme."
  }, {
    id: "launch-a-subscription-widget-next-steps",
    title: "Next steps",
    html: "Test the widget on desktop and mobile before publishing."
  }]
}, {
  id: "article-increase-subscriber-lifetime-value",
  collectionId: "collection-grow",
  title: "Increase subscriber lifetime value",
  slug: "increase-subscriber-lifetime-value",
  description: "Use relevant offers to grow recurring revenue.",
  intro: ["Create useful subscriber experiences that increase long-term value."],
  sections: [{
    id: "increase-subscriber-lifetime-value-growth-opportunities",
    title: "Growth opportunities",
    html: "Test bundles, add-ons, gifts, loyalty rewards, and product recommendations throughout the subscriber journey."
  }, {
    id: "increase-subscriber-lifetime-value-next-steps",
    title: "Next steps",
    html: "Measure incremental revenue and repeat participation."
  }]
}, {
  id: "article-create-product-bundles",
  collectionId: "collection-grow",
  title: "Create product bundles",
  slug: "create-product-bundles",
  description: "Let subscribers build a personalized recurring order.",
  intro: ["Bundles give subscribers flexibility while increasing order value."],
  sections: [{
    id: "create-product-bundles-bundle-configuration",
    title: "Bundle configuration",
    html: "Choose bundle products, selection limits, pricing rules, and delivery frequencies."
  }, {
    id: "create-product-bundles-next-steps",
    title: "Next steps",
    html: "Preview every bundle state before launch."
  }]
}, {
  id: "article-configure-cancellation-flows",
  collectionId: "collection-retain",
  title: "Configure cancellation flows",
  slug: "configure-cancellation-flows",
  description: "Create personalized experiences that reduce voluntary churn.",
  intro: ["Cancellation flows help identify churn reasons and offer relevant alternatives."],
  sections: [{
    id: "configure-cancellation-flows-cancellation-strategy",
    title: "Cancellation strategy",
    html: "Collect cancellation reasons and present relevant alternatives or offers before confirming cancellation."
  }, {
    id: "configure-cancellation-flows-next-steps",
    title: "Next steps",
    html: "Review save rates by cancellation reason."
  }]
}, {
  id: "article-run-first-experiment",
  collectionId: "collection-experiments",
  title: "Run your first experiment",
  slug: "run-first-experiment",
  description: "Test subscription experiences with a clear hypothesis.",
  intro: ["Experiments help your team make evidence-based subscription decisions."],
  sections: [{
    id: "run-your-first-experiment-experiment-design",
    title: "Experiment design",
    html: "Select one variable, define the audience and success metric, then run the test for a meaningful period."
  }, {
    id: "run-your-first-experiment-next-steps",
    title: "Next steps",
    html: "Document the result before starting another test."
  }]
}, {
  id: "article-connect-email-platform",
  collectionId: "collection-integrations",
  title: "Connect your email platform",
  slug: "connect-email-platform",
  description: "Synchronize subscriber events with lifecycle messaging.",
  intro: ["Connect subscriber events to personalized email automations."],
  sections: [{
    id: "connect-your-email-platform-email-integration",
    title: "Email integration",
    html: "Authorize the integration, map subscriber events, and test each automated message before enabling it."
  }, {
    id: "connect-your-email-platform-next-steps",
    title: "Next steps",
    html: "Monitor event delivery after launch."
  }]
}, {
  id: "article-integration-troubleshooting",
  collectionId: "collection-integrations",
  title: "Integration troubleshooting",
  slug: "integration-troubleshooting",
  description: "Resolve common connection and data-sync problems.",
  intro: ["Use connection logs and event history to diagnose integration issues."],
  sections: [{
    id: "integration-troubleshooting-connection-checks",
    title: "Connection checks",
    html: "Confirm credentials, permissions, event delivery, field mapping, and retry history."
  }, {
    id: "integration-troubleshooting-next-steps",
    title: "Next steps",
    html: "Collect relevant logs before contacting support."
  }]
}, {
  id: "article-customize-customer-portal",
  collectionId: "collection-customer-portal",
  title: "Customize the customer portal",
  slug: "customize-customer-portal",
  description: "Match the subscriber portal to your brand and policies.",
  intro: ["Customize the portal experience and available subscriber actions."],
  sections: [{
    id: "customize-the-customer-portal-portal-customization",
    title: "Portal customization",
    html: "Configure colors, labels, available actions, product swaps, order scheduling, and cancellation options."
  }, {
    id: "customize-the-customer-portal-next-steps",
    title: "Next steps",
    html: "Preview the portal as a subscriber before publishing."
  }]
}, {
  id: "article-create-subscriber-rewards",
  collectionId: "collection-loyalty-and-referral",
  title: "Create subscriber rewards",
  slug: "create-subscriber-rewards",
  description: "Reward milestones and long-term subscriber behavior.",
  intro: ["Use rewards to recognize valuable subscriber actions."],
  sections: [{
    id: "create-subscriber-rewards-reward-rules",
    title: "Reward rules",
    html: "Define eligible milestones, reward values, expiration rules, and customer communication."
  }, {
    id: "create-subscriber-rewards-next-steps",
    title: "Next steps",
    html: "Test eligibility and redemption before launch."
  }]
}, {
  id: "article-manage-active-subscription",
  collectionId: "collection-manage-subscriptions",
  title: "Manage an active subscription",
  slug: "manage-active-subscription",
  description: "Update products, schedules, and customer details safely.",
  intro: ["Review subscription history before making an account change."],
  sections: [{
    id: "manage-an-active-subscription-subscription-actions",
    title: "Subscription actions",
    html: "Review the subscription timeline before applying product, quantity, date, status, or payment changes."
  }, {
    id: "manage-an-active-subscription-next-steps",
    title: "Next steps",
    html: "Confirm the upcoming order reflects the intended change."
  }]
}, {
  id: "article-configure-store-settings",
  collectionId: "collection-settings",
  title: "Configure store settings",
  slug: "configure-store-settings",
  description: "Set the defaults used throughout your Loop account.",
  intro: ["Store settings control shared subscription behavior."],
  sections: [{
    id: "configure-store-settings-store-configuration",
    title: "Store configuration",
    html: "Review billing, notifications, customer permissions, order behavior, and localization settings."
  }, {
    id: "configure-store-settings-next-steps",
    title: "Next steps",
    html: "Test affected customer workflows after changing a setting."
  }]
}, {
  id: "article-manage-team-permissions",
  collectionId: "collection-settings",
  title: "Manage team permissions",
  slug: "manage-team-permissions",
  description: "Control access for each member of your team.",
  intro: ["Assign access based on each team member's responsibilities."],
  sections: [{
    id: "manage-team-permissions-roles-and-access",
    title: "Roles and access",
    html: "Give team members only the permissions required for their responsibilities."
  }, {
    id: "manage-team-permissions-next-steps",
    title: "Next steps",
    html: "Review access whenever team responsibilities change."
  }]
}, {
  id: "article-common-subscription-questions",
  collectionId: "collection-frequently-asked-questions",
  title: "Common subscription questions",
  slug: "common-subscription-questions",
  description: "Quick answers to frequently asked subscription questions.",
  intro: ["Find answers to common merchant and subscriber questions."],
  sections: [{
    id: "common-subscription-questions-frequently-asked-questions",
    title: "Frequently asked questions",
    html: "Find answers about billing, orders, customer accounts, payment failures, cancellations, and migration."
  }, {
    id: "common-subscription-questions-next-steps",
    title: "Next steps",
    html: "Contact Loop support if your question is not covered."
  }]
}];

