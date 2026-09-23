import SuccessStoriesCta from "../components/success-stories/SuccessStoriesCta";
import SuccessStoriesGrid from "../components/success-stories/SuccessStoriesGrid";
import SuccessStoriesHero from "../components/success-stories/SuccessStoriesHero";
import ReviewMarquee from "../components/ui/ReviewMarquee";
import {
  successStories,
} from "../content/successStories";
import { reviews } from "../content/home";

export const metadata = {
  title: "Success Stories | Pulse Subscriptions",
  description:
    "Discover how subscription brands grow recurring revenue and retain more customers with Pulse.",
};

export default function SuccessStoriesRoute() {
  return (
    <main className="bg-white text-[#2d2c2b]">
      <SuccessStoriesHero stories={successStories} />
      <SuccessStoriesGrid stories={successStories} />
      <ReviewMarquee reviews={reviews} />
      <SuccessStoriesCta />
    </main>
  );
}
