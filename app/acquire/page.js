import AcquireBundles from "../components/acquire/AcquireBundles";
import AcquireCta from "../components/acquire/AcquireCta";
import AcquireHero from "../components/acquire/AcquireHero";
import AcquireResults from "../components/acquire/AcquireResults";
import AcquireSplitSection from "../components/acquire/AcquireSplitSection";
import AcquireWidgets from "../components/acquire/AcquireWidgets";
import {
  acquireCdn,
  acquireLogos,
  bundleFeatures,
  countryFeatures,
  customerFeatures,
  resultStories,
  widgetFeatures,
} from "../content/acquire";

export const metadata = {
  title: "Increase Subscription Take Rate | Loop",
  description:
    "Convert one-time buyers into subscribers with Loop's optimized widgets, localized offers, bundles, and one-click checkout links.",
};

export default function AcquirePage() {
  return (
    <>
      <div className="overflow-hidden bg-white text-[#2d155f]">
        <AcquireHero logos={acquireLogos} />
        <AcquireWidgets features={widgetFeatures} />
        <AcquireSplitSection
          title="Built for every market you sell to."
          description="Localized send times, currency, and offers, so every subscriber gets an email that feels made for them."
          features={countryFeatures}
          image={`/images/email-2.png`}
          imageAlt="Localized country discount visualization"
          tinted
        />
        <AcquireBundles features={bundleFeatures} />
        <AcquireSplitSection
          title="Grow your email list, everywhere."
          description="Turn every storefront visit, social bio, and landing page into a new email subscriber."
          features={customerFeatures}
          image="/images/email-4.png"
          imageAlt="One-click subscription checkout flow"
          tinted
        />
        <AcquireResults stories={resultStories} />
        <AcquireCta />
      </div>
    </>
  );
}
