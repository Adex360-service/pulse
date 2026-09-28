import { integrationsPage } from "../content/integration";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Integrations | Pulse Subscriptions",
  description:
    "Connect Pulse with the tools your subscription business already uses.",
};

export default function IntegrationsPage() {
  return (
    <main className="bg-white text-[#292b3a]">
      <div className="mx-auto w-[min(1100px,calc(100%-96px))] pt-9 pb-12 max-sm:w-[calc(100%-40px)] max-sm:pt-8">
        <header className="max-w-[700px]">
          <p className="text-[12px] font-semibold tracking-[0.04em] text-[#7138e8] uppercase">
            {integrationsPage.eyebrow}
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.12] font-semibold max-sm:text-[26px]">
            {integrationsPage.title}
          </h1>
          <p className="mt-2 text-[13px] leading-[1.45] text-[#777985]">
            {integrationsPage.description}
          </p>
        </header>

        <section className="mt-9" aria-labelledby="platform-integrations-title">
          <h2
            id="platform-integrations-title"
            className="font-[family-name:var(--font-fraunces)] text-[18px] leading-tight font-semibold"
          >
            {integrationsPage.platformsTitle}
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            {integrationsPage.platforms.map((integration) => (
              <article
                key={integration.name}
                className="min-h-[138px] rounded-lg border border-[#e8e6ef] bg-white p-4"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={integration.image}
                    alt="logo"
                    aria-hidden="true"
                    width={40}
                    height={40}
                    className="h-5 w-5 shrink-0 object-contain"
                  />
                  <h3 className="text-[13px] leading-tight font-semibold">
                    {integration.name}
                  </h3>
                </div>
                <p className="mt-3 text-[12px] leading-[1.45] text-[#777985]">
                  {integration.description}
                </p>
                {integration.action && (
                  <Link
                    className="mt-2 inline-flex text-[12px] leading-tight font-semibold text-[#7138e8] hover:underline"
                    href={integration.href}
                    target={
                      integration.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      integration.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                  >
                    {integration.action} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-9"
          aria-labelledby="messaging-integrations-title"
        >
          <h2
            id="messaging-integrations-title"
            className="font-[family-name:var(--font-fraunces)] text-[18px] leading-tight font-semibold"
          >
            {integrationsPage.messagingTitle}
          </h2>
          <div className="mt-3 grid gap-3">
            {integrationsPage.messaging.map((integration) => (
              <article
                key={integration.name}
                className="min-h-[108px] rounded-lg border border-[#e8e6ef] bg-[#faf9fc] p-4"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={integration.image}
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0 object-contain"
                  />
                  <h3 className="text-[13px] leading-tight font-semibold">
                    {integration.name}
                  </h3>
                </div>
                <p className="mt-3 text-[12px] leading-[1.45] text-[#777985]">
                  {integration.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
