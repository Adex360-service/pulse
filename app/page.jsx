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
      <button className="fixed right-6 bottom-6 z-[90] grid h-[58px] w-[58px] cursor-pointer place-items-center rounded-full border-0 bg-[#7726ff] text-white shadow-[0_7px_20px_#31126b55]" aria-label="Open support chat">
        <span className="relative h-[19px] w-[23px] rounded-[3px] border-2 border-current text-[0] after:absolute after:bottom-[-7px] after:left-[3px] after:h-[7px] after:w-[7px] after:-skew-y-[35deg] after:border-l-2 after:border-white">□</span>
      </button>
    </>
  );
}
