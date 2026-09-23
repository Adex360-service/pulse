"use client";

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import {
  featureGroups,
  plans,
  pricingFaqs,
  pricingLogos,
} from "../../content/pricing";

const heading = "font-[family-name:var(--font-display)] text-[#432184]";

function Plans() {
  return (
    <section className="bg-[linear-gradient(180deg,#f9f6f2,#e6caff)] py-20">
      <Container>
        <div className="text-center">
          <h1
            className={`${heading} text-[36px] leading-tight max-sm:text-[24px]`}
          >
            Email, Push Notifications and WhatsApp —{" "}
            <span className="text-black">all in one powerful platform.</span>
          </h1>
          <p className="mt-4 text-[#898285]">
            Start free and scale as you grow. Flexible pricing based on your
            usage.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-4 text-sm font-semibold max-md:flex-wrap">
          {["Email Marketing", "Push Notifications", "WhatsApp Messaging"].map(
            (channel, index) => (
              <span
                key={channel}
                className="rounded-full border border-[#e7e0d8] bg-white px-5 py-2 text-[#29283a]"
              >
                <span
                  className={`mr-2 inline-block h-5 w-5 rounded-full align-middle ${index === 0 ? "bg-[#2e78dd]" : index === 1 ? "bg-[#e9a315]" : "bg-[#22aa54]"}`}
                />
                {channel}
              </span>
            ),
          )}
        </div>
        <div className="mx-auto mt-8 grid max-w-[1365px] grid-cols-3 items-stretch gap-5 max-lg:grid-cols-1">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-h-[545px] flex-col rounded-2xl bg-white p-6 max-sm:min-h-0 max-sm:p-6 ${plan.best ? "border-2 border-[#3f48e8]" : "border border-[#e9e3db]"}`}
            >
              {plan.best && (
                <span className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-full bg-[#3f48e8] px-5 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h2 className="text-[25px] font-semibold text-[#202033]">
                {plan.name}
              </h2>
              <div className="mt-2 flex items-baseline gap-2">
                <strong className="text-[43px] leading-none text-[#151526]">
                  {plan.price}
                </strong>
                <span className="text-sm text-[#777]">/month</span>
              </div>
              <p className="mt-2 min-h-10 text-sm text-[#777]">
                {plan.subtitle}
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {plan.usage.map((item, index) => {
                  const [value, ...labelParts] = item.split(" ");
                  return (
                    <div
                      key={item}
                      className="rounded-lg border border-[#e7e0d8] px-2 py-2 text-center"
                    >
                      <span
                        className={`mx-auto mb-1 block h-4 w-4 rounded-full border-2 ${index === 0 ? "border-[#2e78dd]" : index === 1 ? "border-[#e9a315]" : "border-[#22aa54]"}`}
                      />
                      <b className="block text-lg leading-none text-[#202033]">
                        {value}
                      </b>
                      <small className="text-[10px] leading-tight text-[#666]">
                        {labelParts.join(" ")}
                      </small>
                    </div>
                  );
                })}
              </div>
              <Link
                href="/book-a-demo"
                className={`order-last mt-auto block rounded-lg py-3 text-center text-base font-semibold text-white ${plan.best ? "bg-[#3f48e8]" : "bg-[#171722]"}`}
              >
                {plan.action}
              </Link>
              <ul className="mt-5 space-y-2 text-sm text-[#353542]">
                {plan.features.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-base text-[#20a753]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Comparison() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? featureGroups : featureGroups.slice(0, 1);
  return (
    <section className="bg-[#fbf8f4] py-20">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#8b43fd]">
          Compare Pulse Plans
        </p>
        <h2
          className={`${heading} mt-5 text-center text-[52px] leading-tight max-sm:text-[36px]`}
        >
          See exactly what's included in each plan.
        </h2>
        <div className="mx-auto mt-14 max-w-[1280px] overflow-x-auto border border-[#e6e2df] bg-white">
          <table className="w-full min-w-[900px] table-fixed border-collapse text-left text-[15px]">
            <colgroup>
              <col className="w-[22%]" />
              <col className="w-[42%]" />
              <col className="w-[12%]" />
              <col className="w-[12%]" />
              <col className="w-[12%]" />
            </colgroup>
            <thead>
              <tr className="h-[68px] border-b border-[#ddd]">
                <th className="px-8 uppercase tracking-[0.14em] text-[#666]">
                  Feature
                </th>
                <th className="px-8 uppercase tracking-[0.14em] text-[#666]">
                  What you get
                </th>
                <th className="px-5 text-center uppercase tracking-[0.14em] text-[#666]">
                  Starter
                </th>
                <th className="px-5 text-center uppercase tracking-[0.14em] text-[#8b43fd]">
                  Pro
                </th>
                <th className="px-5 text-center uppercase tracking-[0.14em] text-[#666]">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {visible.map(([group, items], groupIndex) => (
                <FragmentRows
                  key={group}
                  group={group}
                  items={expanded ? items : items.slice(0, 5)}
                  number={groupIndex + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mx-auto mt-8 block border border-[#8b43fd] px-10 py-4 text-base font-semibold text-[#8b43fd]"
        >
          {expanded ? "Show fewer features ↑" : "Show all 70 more features ↓"}
        </button>
      </Container>
    </section>
  );
}
function FragmentRows({ group, items, number }) {
  const descriptions = {
    Streaks: "Reward subscribers for ordering consistently on time",
    "Mystery rewards": "Surprise reward when a subscriber logs into the portal",
    "Subscriber reward journey": "Reward subscribers for staying longer",
    "Automation flows": "Automate subscriber journeys without writing code",
    "Personalized cancellation flows":
      "Save more subscribers with targeted offers",
  };
  return (
    <>
      <tr className="h-[130px] border-b border-[#ddd] bg-[#fdfcfb]">
        <th colSpan="5" className="px-8">
          <span className="mr-7 text-sm font-normal text-[#8b43fd]">
            {String(number).padStart(2, "0")}
          </span>
          <span className="text-[30px] font-medium text-[#171717]">
            {group}
          </span>
          {group === "Retention" && (
            <span className="mt-2 ml-[48px] block text-base font-normal text-[#666]">
              Where most of the LTV math happens.
            </span>
          )}
        </th>
      </tr>
      {items.map((item, index) => (
        <tr className="h-[80px] border-b border-[#eee]" key={item}>
          <th className="px-8 text-base font-semibold">{item}</th>
          <td className="px-8 text-base text-[#686466]">
            {descriptions[item] ||
              "Powerful tools built to help subscription brands grow"}
          </td>
          <td className="px-5 text-center text-xl text-[#8b43fd]">
            {index === 4 || index % 3 === 0 ? "✓" : "—"}
          </td>
          <td className="px-5 text-center text-xl text-[#8b43fd]">✓</td>
          <td className="px-5 text-center text-xl text-[#8b43fd]">✓</td>
        </tr>
      ))}
    </>
  );
}

function Proof() {
  return (
    <section className="bg-[#f5f1e9] py-20">
      <Container>
        <h2 className={`${heading} text-center text-2xl`}>
          Trusted by leading Shopify brands
        </h2>
        <div className="mt-10 grid w-full grid-cols-6 bg-white max-md:grid-cols-3 max-sm:grid-cols-2">
          {pricingLogos.map((logo, index) => (
            <div
              key={logo}
              className="grid h-24 place-items-center border border-[#eee] p-5"
            >
              <img
                src={logo}
                alt={`Trusted brand ${index + 1}`}
                className="max-h-10 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
        <h2
          className={`${heading} mt-20 text-center text-[60px] leading-tight max-sm:text-[40px]`}
        >
          Migration fully managed
        </h2>
        <p className="mx-auto mt-6 max-w-[650px] text-center text-xl leading-[1.45] text-[#9da0a5] max-sm:text-base">
          Switching from the current platform is a guided transition - not a
          project you have to run yourself
        </p>
        <div className="mt-14 grid w-full grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {[
            ["Subscription revenue processed", "$4B+"],
            ["Shopify brands", "2,400+"],
            ["Migrations completed", "1,100+"],
            ["App Store rating", "4.9 ★"],
          ].map(([label, value]) => (
            <div
              className="min-h-[205px] border border-[#e4dac6] bg-white p-7"
              key={label}
            >
              <p className="text-[14px] font-semibold uppercase leading-[1.45] tracking-[0.14em] text-[#44208d]">
                • {label}
              </p>
              <strong
                className={`${heading} mt-8 block text-[58px] leading-none font-normal max-lg:text-[46px]`}
              >
                {value}
              </strong>
            </div>
          ))}
        </div>
        <div className="flex min-h-[138px] mt-5 w-full items-center justify-between border border-[#eadfc9] bg-[#fff3d8] px-7 py-6 max-sm:flex-col max-sm:gap-5">
          <p className="text-base">
            <b>White-glove migration.</b>{" "}
            <span className="text-[#666]">
              Fully managed by Pulse end to end.
            </span>
          </p>
          <Link
            className="bg-[#472086] px-7 py-4 text-sm font-semibold text-white"
            href="/migration"
          >
            See how it works
          </Link>
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-24">
      <Container className="max-w-[760px]">
        <p className="text-xs font-semibold text-[#8b43fd]">FAQ</p>
        <h2 className={`${heading} mt-3 text-[48px] leading-[1.05]`}>
          Everything before
          <br />
          you book the call.
        </h2>
        <div className="mt-10">
          {pricingFaqs.map((item, i) => (
            <div className="border-b" key={item.question}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full justify-between py-5 text-left font-semibold text-[#432184]"
              >
                {item.question}
                <span>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p className="pb-5 leading-7 text-[#777]">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      <Plans />
      {/* <Comparison /> */}
      {/* <Proof /> */}
      <Faq />
      <section className="bg-[linear-gradient(120deg,#6d35bd,#a945c1)] py-24 text-center text-white">
        <Container>
          <h2 className="font-[family-name:var(--font-display)] text-[48px] leading-tight">
            See what Pulse looks like
            <br />
            for your brand.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm">
            Book a call and we'll walk through your monthly cost with Pulse and
            how a switch would work for your setup — no pressure, no pitch.
          </p>
          <Link
            href="/book-a-demo"
            className="mt-8 inline-block bg-[#e5c47c] px-10 py-4 text-sm font-semibold text-white"
          >
            Book a demo →
          </Link>
        </Container>
      </section>
    </>
  );
}
