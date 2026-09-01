import Footer from "../components/Footer";
import Header from "../components/Header";
import AcquireBundles from "../components/acquire/AcquireBundles";
import AcquireCta from "../components/acquire/AcquireCta";
import AcquireHero from "../components/acquire/AcquireHero";
import AcquireResults from "../components/acquire/AcquireResults";
import AcquireSplitSection from "../components/acquire/AcquireSplitSection";
import AcquireWidgets from "../components/acquire/AcquireWidgets";
import { acquireCdn, acquireLogos, bundleFeatures, countryFeatures, customerFeatures, resultStories, widgetFeatures } from "../content/acquire";

export const metadata = {
  title: "Increase Subscription Take Rate | Loop",
  description: "Convert one-time buyers into subscribers with Loop's optimized widgets, localized offers, bundles, and one-click checkout links.",
};

export default function AcquirePage() {
  return <><Header /><main className="overflow-hidden bg-white text-[#2d155f]"><AcquireHero logos={acquireLogos} /><AcquireWidgets features={widgetFeatures} /><AcquireSplitSection title="Country-level optimization" description="Localized pricing and offers that resonate with customers wherever they are." features={countryFeatures} image={`${acquireCdn}/686b8c957490dc6dac69fdf7_24d43ccbdb397ede96863c89ad3d5954_March%20%282%29%201.avif`} imageAlt="Localized country discount visualization" tinted /><AcquireBundles features={bundleFeatures} /><AcquireSplitSection title="Convert existing customers into subscribers" description="Leverage One-click checkout links to drive subscriptions from every marketing channel." features={customerFeatures} image={`${acquireCdn}/686cfb94b7a7aae8a2a6d96e_Group%2048096266%20(1).png`} imageAlt="One-click subscription checkout flow" tinted /><AcquireResults stories={resultStories} /><AcquireCta /></main><Footer /></>;
}
