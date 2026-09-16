import Container from "../ui/Container";
import ManagementButton from "../management/ManagementButton";
import { hero } from "../../content/analytics";

export default function AnalyticsHero() {
  return (
    <section className="pt-[70px] pb-[145px] max-[700px]:pt-[50px] max-[700px]:pb-[100px]">
      <Container>
        <div className="max-w-[1020px]">
          <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(42px,4vw,64px)] leading-[1.08] font-normal tracking-[-1.8px] max-[700px]:tracking-[-1px]">{hero.title}</h1>
          <p className="my-6 max-w-[800px] text-[19px] leading-[1.55] text-[#55514f] max-[700px]:text-[17px]">{hero.description}</p>
          <div className="mt-[30px] flex flex-wrap gap-3.5">
            <ManagementButton href="/book-a-demo">Sign up</ManagementButton>
            <ManagementButton href="/book-a-demo" className="border-[#7928dc]! bg-transparent! text-[#7928dc]!">Get a demo</ManagementButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
