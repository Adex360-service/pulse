import Footer from "../components/Footer";
import Header from "../components/Header";
import BookDemoFaq from "../components/book-demo/BookDemoFaq";
import BookDemoHero from "../components/book-demo/BookDemoHero";
import { demoFaqs } from "../content/bookDemo";

export const metadata = {
  title: "Book a Demo – Best Shopify Subscription App for DTC Brands",
  description: "See Loop Subscriptions in action. Book a personalized demo of the Shopify subscription app trusted by leading DTC brands.",
};

export default function BookDemoPage() {
  return <><Header /><main id="top"><BookDemoHero /><BookDemoFaq faqs={demoFaqs} /></main><Footer /></>;
}
