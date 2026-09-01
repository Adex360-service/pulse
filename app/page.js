import Footer from "./components/Footer";
import Header from "./components/Header";
import ResultsAccordion from "./components/ResultsAccordion";
import Hero from "./components/home/Hero";
import Migration from "./components/home/Migration";
import Platform from "./components/home/Platform";
import Pricing from "./components/home/Pricing";
import Problems from "./components/home/Problems";
import Team from "./components/home/Team";
import {
  brandLogos,
  cancellationStages,
  features,
  migrationSteps,
  problems,
  reviews,
} from "./content/home";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero logos={brandLogos} />
        <Problems items={problems} />
        <Team reviews={reviews} />
        <Platform features={features} cancellationStages={cancellationStages} />
        <ResultsAccordion />
        <Migration steps={migrationSteps} />
        <Pricing />
      </main>
      <Footer />
      <button className="chat-bubble" aria-label="Open support chat">
        <span>□</span>
      </button>
    </>
  );
}
