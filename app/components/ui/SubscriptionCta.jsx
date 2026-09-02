import Container from "./Container";
import AcquireButton from "../acquire/AcquireButton";

export default function SubscriptionCta({ backgroundImage, sectionClassName, containerClassName, headingClassName, copyClassName, title = "Ready to scale your subscription business?", copy = "Join 2,400+ Shopify subscription brands on Loop.", buttonLabel = "Talk to sales" }) {
  return <section className={sectionClassName} style={{ backgroundImage: `url("${backgroundImage}")` }}><Container className={containerClassName}><h2 className={headingClassName}>{title}</h2><p className={copyClassName}>{copy}</p><AcquireButton outline>{buttonLabel}</AcquireButton></Container></section>;
}
