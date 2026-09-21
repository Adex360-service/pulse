import ComingSoon from "../components/coming-soon/ComingSoon";

export const metadata = {
  title: "Success Stories | Pulse Subscriptions",
  description:
    "Discover how subscription brands grow recurring revenue and retain more customers with Pulse.",
};

export default function SuccessStoriesRoute() {
  return (
    <ComingSoon
      eyebrow="Customer success"
      message="Coming soon"
      title="Success stories"
      description="See how ambitious subscription brands use Pulse to grow recurring revenue, retain more customers, and build better experiences."
      messageDescription="We’re gathering the stories of the brands growing with Pulse. Check back soon for real results, practical lessons, and ideas you can put to work."
      actionLabel="Explore Pulse"
      actionHref="/"
    />
  );
}
