import BookDemoFaq from "../components/book-demo/BookDemoFaq";
import BookDemoReviews from "../components/book-demo/BookDemoReviews";
import BookDemoSections from "../components/book-demo/BookDemoSections";
import {
  demoBenefits,
  demoFaqs,
  demoLogos,
  demoMigrationSteps,
  demoResults,
  demoReviews,
} from "../content/bookDemo";

export const metadata = {
  title: "Book a Demo – Best Shopify Subscription App for DTC Brands",
  description:
    "See Loop Subscriptions in action. Book a personalized demo of the Shopify subscription app trusted by leading DTC brands.",
};

export default function BookDemoPage() {
  return (
    <>
      <BookDemoSections
        logos={demoLogos}
        benefits={demoBenefits}
        migrationSteps={demoMigrationSteps}
        results={demoResults}
      />
      <BookDemoReviews reviews={demoReviews} />
      <BookDemoFaq faqs={demoFaqs} />
    </>
  );
}
