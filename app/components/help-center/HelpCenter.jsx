"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { helpCenterCollections } from "../../content/helpCenter";
import { HelpCenterFooter, HelpCenterHeader, HelpChat } from "./HelpCenterChrome";

export default function HelpCenter() {
  const [query, setQuery] = useState("");
  const collections = useMemo(
    () => helpCenterCollections.filter(({ title }) => title.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <main className="min-h-screen bg-white font-sans text-[#272727]">
      <HelpCenterHeader home query={query} onQueryChange={(event) => setQuery(event.target.value)} />
      <section className="mx-auto -mt-24 grid w-[min(960px,calc(100%-40px))] grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:-mt-16 max-sm:grid-cols-1">
        {collections.map(({ title, slug, articles, icon }) => (
          <Link href={"/help-center/" + slug} key={slug} className="flex min-h-[138px] flex-col rounded-[17px] border border-[#dedede] bg-white p-6 shadow-[0_2px_3px_#0000000d] transition hover:-translate-y-0.5 hover:border-[#8b43fd]">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f0e7ff]"><img src={icon} alt="" className="h-7 w-7 object-contain" /></span>
            <strong className="mt-3 text-[15px]">{title}</strong>
            <span className="mt-auto pt-4 text-sm text-[#696969]">{articles.length} {articles.length === 1 ? "article" : "articles"}</span>
          </Link>
        ))}
        {!collections.length && <p className="col-span-full py-20 text-center text-[#777]">No collections found.</p>}
      </section>
      <HelpCenterFooter />
      <HelpChat />
    </main>
  );
}
