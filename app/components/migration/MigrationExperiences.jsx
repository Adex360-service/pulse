import Container from "../ui/Container";
import MigrationStories from "./MigrationStories";

export default function MigrationExperiences({ stories }) {
  return <section className="py-[120px] text-center max-sm:pt-4 max-sm:pb-12"><Container className="max-w-[1380px]"><h2 className="font-[family-name:var(--font-fraunces)] text-[42px] font-semibold max-sm:text-[32px]">Real world experiences</h2><MigrationStories stories={stories} /></Container></section>;
}
