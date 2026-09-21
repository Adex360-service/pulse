import ComingSoon from "../components/coming-soon/ComingSoon";

export const metadata = {
  title: "Integrations | Pulse Subscriptions",
  description:
    "Connect Pulse with the tools your subscription business already uses.",
};

export default function IntegrationsPage() {
  return (
    <ComingSoon
      eyebrow="Connect your stack"
      title="Integrations"
      description="Bring your subscription data and customer experiences together with the tools your team already uses."
      message="Coming soon"
      messageDescription="We’re preparing the integrations directory. Check back soon to see the platforms and tools that connect with pulse."
      actionLabel="Explore Loop"
      actionHref="/"
    />
  );
}
