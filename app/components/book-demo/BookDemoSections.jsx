import Link from "next/link";
import LogoMarquee from "../ui/LogoMarquee";
import BookDemoForm from "./BookDemoForm";
import BookDemoResults from "./BookDemoResults";

export default function BookDemoSections({
  logos,
  benefits,
  migrationSteps,
  results,
}) {
  return (
    <section className="relative overflow-clip bg-white text-[#211d2b]">
      <div className="relative mx-auto grid w-[min(1440px,calc(100%-48px))] grid-cols-[3fr_2fr] items-start max-lg:block max-sm:w-[calc(100%-32px)]">
        <div className="pointer-events-none absolute inset-y-0 right-0 left-[60%] bg-[linear-gradient(180deg,#fff_0%,#fbf4ff_16%,#f5e4ff_42%,#b65bff_72%,#f1dbff_100%)] max-lg:hidden" />
        <div className="min-w-0">
          <div className="flex min-h-[580px] flex-col justify-center px-16 py-16 max-sm:min-h-0 max-sm:px-0 max-sm:py-16">
            <p className="text-xs font-semibold tracking-[2px] text-[#8d42f5] uppercase">
              Built for high growth Shopify brands
            </p>
            <h1 className="mt-6 max-w-[740px] font-[family-name:var(--font-display)] text-[54px] leading-[1.08] tracking-[-1px] text-[#18131e] max-sm:text-[44px]">
              Your subscription growth.
              <span className="block">Taken personally.</span>
            </h1>
            <p className="mt-8 max-w-[690px] text-[19px] leading-[1.55] text-[#625d68]">
              The platform and the people to help you win more subscribers, keep
              them longer and recover more recurring revenue.
            </p>
            <ul className="mt-11 grid max-w-[690px] grid-cols-3 text-left">
              <li>
                <strong className="block font-[family-name:var(--font-display)] text-[32px] font-normal text-[#211d2b]">
                  2,400+
                </strong>
                <span className="text-[9px] tracking-[1.5px] text-[#8c8795]">
                  SHOPIFY BRANDS
                </span>
              </li>
              <li>
                <strong className="block font-[family-name:var(--font-display)] text-[32px] font-normal text-[#211d2b]">
                  $4B+
                </strong>
                <span className="text-[9px] tracking-[1.5px] text-[#8c8795]">
                  PROCESSED
                </span>
              </li>
              <li>
                <strong className="block font-[family-name:var(--font-display)] text-[32px] font-normal text-[#211d2b]">
                  5.0 <i className="not-italic text-[#ffb632]">★</i>
                </strong>
                <span className="text-[9px] tracking-[1.1px] text-[#8c8795]">
                  ON SHOPIFY APP STORE
                </span>
              </li>
            </ul>
            <LogoMarquee
              logos={logos}
              wrapperClassName="mt-16 overflow-hidden border-y border-[#ebe7ee] py-7"
              trackClassName="flex w-max animate-[migrationLogoMarquee_28s_linear_infinite] items-center motion-reduce:animate-none"
              groupClassName="flex shrink-0 items-center gap-12 pr-12"
              imageClassName="h-10 w-[120px] shrink-0 object-contain grayscale"
            />
          </div>
          <div className="px-16 pb-20 max-sm:px-0 max-sm:py-16">
            <p className="text-xs tracking-[2px] text-[#827b91] uppercase">
              Designed for scale
            </p>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-[50px] leading-[1.13] text-[#18131e] max-sm:text-[39px]">
              More than a platform.
              <span className="block">A team invested in your growth.</span>
            </h2>
            <div className="mt-14 grid grid-cols-3 border border-[#e1dce7] max-md:grid-cols-1">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="min-h-[260px] border-r border-[#e1dce7] p-7 last:border-r-0 max-md:border-r-0 max-md:border-b max-md:last:border-b-0"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="h-11 w-11 object-contain"
                  />
                  <h3 className="mt-7 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#686270]">
                    {item.copy}
                  </p>
                  {item.link && (
                    <>
                      <p className="mt-5 text-sm text-[#918a9d]">
                        Want to learn more?
                      </p>
                      <Link
                        href={item.link}
                        className="mt-1 inline-block text-sm font-semibold text-[#7625d4]"
                      >
                        View full pricing →
                      </Link>
                    </>
                  )}
                </article>
              ))}
            </div>
          </div>
          <div className="bg-[#f2f0ff] px-16 py-24 max-sm:-mx-4 max-sm:px-4 max-sm:py-16">
            <p className="text-xs tracking-[2px] text-[#827b91] uppercase">
              White-glove migration
            </p>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-[50px] leading-[1.18] text-[#15101e] max-sm:text-[39px]">
              1,100+ migrations.
              <span className="block">Every detail accounted for.</span>
            </h2>
            <p className="mt-6 text-[#625e6b]">
              Our migration team handles the switch from planning to launch,
              with minimal work for yours.
            </p>
            <ol className="mt-12 border-t border-[#d8d3e5]">
              {migrationSteps.map(([number, title, copy]) => (
                <li
                  key={number}
                  className="grid grid-cols-[58px_1fr] gap-5 border-b border-[#d8d3e5] py-8"
                >
                  <span className="font-[family-name:var(--font-display)] text-[42px] text-[#d7d1ed]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-3 leading-6 text-[#686273]">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-2 text-sm font-semibold text-[#893cff]">
              <span className="rounded-md border border-[#cda8ff] px-3 py-1">
                • Fully managed
              </span>
              <span className="rounded-md border border-[#cda8ff] px-3 py-1">
                • No migration fee
              </span>
              <span className="rounded-md border border-[#cda8ff] px-3 py-1">
                • Zero-downtime
              </span>
            </div>
          </div>
          <div className="px-16 py-20 max-sm:px-0 max-sm:py-16">
            <p className="text-[11px] tracking-[1.8px] text-[#8d8799] uppercase">
              Customer results
            </p>
            <h2 className="mt-5 mb-10 font-[family-name:var(--font-display)] text-[45px] leading-[1.08] text-[#18131e] max-sm:text-[39px]">
              Growth you can measure.
            </h2>
            <BookDemoResults results={results} />
          </div>
        </div>
        <aside className="sticky top-[92px] z-10 flex min-h-[calc(100vh-92px)] min-w-0 self-start items-center px-8 py-8 max-lg:relative max-lg:top-0 max-lg:-mx-8 max-lg:min-h-0 max-lg:bg-[#f1ddff] max-lg:px-8 max-lg:py-16 max-sm:-mx-4 max-sm:px-4">
          <BookDemoForm />
        </aside>
      </div>
    </section>
  );
}
