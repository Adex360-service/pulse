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
            className={`${heading} text-[56px] leading-tight max-sm:text-[40px]`}
          >
            Scale your subscriptions.{" "}
            <span className="text-black">
              Not your <em>fees</em>
            </span>
          </h1>
          <p className="mt-4 text-[#898285]">
            Transparent Loop Subscriptions pricing for Shopify — flat monthly
            plans, $0 per-order fees, free migration.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-[1365px] grid-cols-3 items-stretch gap-8 max-lg:grid-cols-1">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-h-[740px] flex-col bg-white p-10 max-sm:min-h-0 max-sm:p-7 ${plan.best ? "border-2 border-[#ebd47c]" : "border border-[#eee]"}`}
            >
              {plan.best && (
                <span className="absolute inset-x-[-2px] -top-10 h-10 bg-[#dfc9ff] pt-3 text-center text-[11px] font-semibold uppercase tracking-widest text-[#8b43fd]">
                  Best value
                </span>
              )}
              <h2 className="text-[28px] font-semibold">{plan.name}</h2>
              <p className="mt-2 min-h-10 text-base text-[#777]">
                {plan.subtitle}
              </p>
              <div className="mt-12 flex min-h-[62px] items-end">
                <strong className={`${heading} text-[52px] leading-none font-normal text-black`}>
                  {plan.price}
                </strong>
                {plan.price.startsWith("$") && (
                  <span className="mb-1 text-base">/month</span>
                )}
              </div>
              <div className="mt-8 min-h-[54px]"><p className="text-base text-[#873cff]">Transaction <b>{plan.rate}</b></p><p className="mt-2 text-base text-black">Per order $0</p></div>
              <Link
                href={
                  plan.name === "Starter"
                    ? "https://apps.shopify.com/loop-subscriptions"
                    : "/book-a-demo"
                }
                className="mt-6 block bg-black py-4 text-center text-base text-white"
              >
                {plan.action}
              </Link>
              <p className="mt-10 text-[12px] font-semibold uppercase tracking-[0.13em]">
                {plan.label}
              </p>
              <ul className="mt-6 space-y-5 text-[17px] text-[#555]">
                {plan.features.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-[#873cff]">•</span>
                    <span>{item}</span>
                    <span className="group relative ml-1 inline-grid h-5 w-5 shrink-0 cursor-help place-items-center rounded-full border border-[#d7bf8b] text-[11px] text-[#b38c42]" tabIndex={0}>i<span role="tooltip" className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-20 hidden w-56 -translate-x-1/2 rounded-lg bg-[#281650] px-3 py-2 text-center text-xs leading-5 font-normal normal-case tracking-normal text-white shadow-lg group-hover:block group-focus:block">Learn more about {item.toLowerCase()} included with the {plan.name} plan.</span></span>
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
          Compare Loop Subscriptions Plans
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
            ["Migrations to Loop", "1,100+"],
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
              Fully managed by Loop end to end.
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
          {pricingFaqs.map((q, i) => (
            <div className="border-b" key={q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full justify-between py-5 text-left font-semibold text-[#432184]"
              >
                {q}
                <span>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p className="pb-5 leading-7 text-[#777]">
                  Loop offers transparent month-to-month pricing with no
                  per-order flat fees, setup fees, migration fees, or hidden
                  add-on charges.
                </p>
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
      <Comparison />
      <Proof />
      <Faq />
      <section className="bg-[linear-gradient(120deg,#6d35bd,#a945c1)] py-24 text-center text-white">
        <Container>
          <h2 className="font-[family-name:var(--font-display)] text-[48px] leading-tight">
            See what Loop looks like
            <br />
            for your brand.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm">
            Book a call and we'll walk through your monthly cost on Loop and how
            a switch would work for your setup — no pressure, no pitch.
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
