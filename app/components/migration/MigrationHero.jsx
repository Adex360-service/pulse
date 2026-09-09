import Container from "../ui/Container";
import ConsultationButton from "./ConsultationButton";
import { migrationCdn as cdn } from "../../content/migration";

export default function MigrationHero() {
  return (
    <section className="relative h-[619px] overflow-hidden bg-[radial-gradient(circle_farthest-side,#fff,#dcb5ff4d_50%,#fff)] pt-[94px] text-center backdrop-blur-[32px] max-sm:h-[550px] max-sm:pt-16">
      <Container className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-[1160px] font-[family-name:var(--font-display)] text-[66px] leading-[68px] font-normal tracking-[-1px] max-lg:text-[48px] max-lg:leading-[52px] max-sm:text-[39px] max-sm:leading-[42px]">Seamless transition with dedicated<br className="max-sm:hidden" /> <span className="text-[#5b35ad]">white-glove migration support</span></h1>
        <p className="mt-8 max-w-[820px] text-[20px] leading-[1.4] text-[#746c7c] max-sm:mt-6 max-sm:text-sm">Our approach focuses on a comprehensive and multi-step strategy executed by specialized teams that help maintain business continuity throughout the transition.</p>
        <ConsultationButton className="mt-8 w-[390px] max-sm:w-auto max-sm:min-w-[280px]" />
        <div className="mt-7 flex items-center gap-1.5 text-sm text-[#473d4f]"><strong>650+</strong><span className="h-5 w-5 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url("${cdn}/685bc29446d981141353d6da_iconoir_star-solid.png")` }} /><span><strong>4.9</strong> star reviews on</span><span className="h-5 w-[120px] bg-contain bg-left bg-no-repeat" role="img" aria-label="Shopify app store" style={{ backgroundImage: `url("${cdn}/685bc268f541f20f92f05364_shopify-logo.svg")` }} /></div>
      </Container>
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[65px] bg-[#c4a4b8]" />
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[65px] bg-[length:100%_100%] bg-bottom bg-no-repeat" style={{ backgroundImage: `url("${cdn}/68625bb15421452f5143c953_Migration-water.svg")` }} />
      <span aria-hidden="true" className="absolute bottom-0 left-0 z-[1] h-[200px] w-[734px] bg-contain bg-bottom-left bg-no-repeat max-sm:h-[110px] max-sm:w-[404px]" style={{ backgroundImage: `url("${cdn}/68625e02ae54454fb640a31b_b3629446f40e6b1b196e9420bd151f64_Group%2048096250.png")` }} />
      <span aria-hidden="true" className="absolute right-0 bottom-0 z-[1] h-[320px] w-[960px] bg-contain bg-right-bottom bg-no-repeat max-sm:hidden" style={{ backgroundImage: `url("${cdn}/68625dffd4775ebe2ee76f0e_Group%2048096251.png")` }} />
    </section>
  );
}
