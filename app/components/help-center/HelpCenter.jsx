"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { helpCollections, helpLogo } from "../../content/helpCenter";

const footerGroups = [
  ["Website links", ["Home", "Pricing", "Migration"]],
  ["Resources", ["Developer hub", "Blogs", "Success stories"]],
  ["Partnerships", ["Agency", "Tech", "Refer a lead"]],
  ["Others", ["Terms of service", "Privacy", "Careers"]],
];

function LoopMark() {
  return <svg className="h-auto w-[90px] text-[#8b43fd]" viewBox="0 0 114 40"><path d="M8 8v14c0 6 4 9 10 9h7c8 0 12-5 12-11s-4-11-12-11-12 5-12 11 4 11 12 11h16c8 0 12-5 12-11S49 9 41 9s-12 5-12 11 4 11 12 11h16c8 0 12-5 12-11S65 9 57 9s-12 5-12 11 4 11 12 11h16c8 0 12-5 12-11S81 9 73 9s-12 5-12 11v18" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function HelpCenter() {
  const [query, setQuery] = useState("");
  const collections = useMemo(() => helpCollections.filter(([name]) => name.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <main className="min-h-screen bg-white font-sans text-[#272727]">
      <header className="bg-[linear-gradient(180deg,#763cff_0%,#813fff_56%,#eee5ff_100%)] pb-40 text-white max-sm:pb-28">
        <div className="mx-auto flex w-[min(960px,calc(100%-40px))] items-center justify-between pt-5">
          <a href="/help-center"><img src={helpLogo} alt="Loop help centre" className="h-[48px] w-auto object-contain" /></a>
          <nav className="flex gap-7 text-sm font-semibold max-sm:gap-4 max-sm:text-xs"><Link href="/">Go to website</Link><Link href="/pricing">Pricing</Link><Link href="/migration">Migration</Link></nav>
        </div>
        <div className="mx-auto mt-24 w-[min(960px,calc(100%-40px))] max-sm:mt-16">
          <h1 className="text-[28px] font-bold">How can we help you?</h1>
          <label className="relative mt-6 block"><span className="sr-only">Search for articles</span><svg className="absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.5"/><path d="m16 16 5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg><input value={query} onChange={(event) => setQuery(event.target.value)} className="h-16 w-full rounded-[18px] border border-white/10 bg-white/20 pr-5 pl-14 text-lg text-white outline-none placeholder:text-white/90 focus:bg-white focus:text-[#333] focus:placeholder:text-[#777]" placeholder="Search for articles..." /></label>
        </div>
      </header>

      <section className="mx-auto -mt-24 grid w-[min(960px,calc(100%-40px))] grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:-mt-16 max-sm:grid-cols-1">
        {collections.map(([name, count, icon]) => <a href="#" key={name} className="flex min-h-[138px] flex-col rounded-[17px] border border-[#dedede] bg-white p-6 shadow-[0_2px_3px_#0000000d] transition hover:-translate-y-0.5 hover:border-[#8b43fd]"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f0e7ff]"><img src={icon} alt="" className="h-7 w-7 object-contain" /></span><strong className="mt-3 text-[15px]">{name}</strong><span className="mt-auto pt-4 text-sm text-[#696969]">{count} articles</span></a>)}
        {!collections.length && <p className="col-span-full py-20 text-center text-[#777]">No collections found.</p>}
      </section>

      <footer className="mx-auto mt-40 grid w-[min(960px,calc(100%-40px))] grid-cols-[1.3fr_repeat(4,1fr)] gap-12 pb-16 text-sm text-[#a0a9b4] max-md:grid-cols-2 max-sm:mt-24 max-sm:grid-cols-1">
        <div><LoopMark /><p className="mt-7">© 2025</p><div className="mt-9 flex gap-5 text-[#9ca7b2]"><span>▶</span><span className="font-bold">in</span><span>𝕏</span></div></div>
        {footerGroups.map(([title, links]) => <div key={title}><h2 className="mb-6 font-semibold text-[#929da8]">{title}</h2>{links.map((link) => <a href="#" className="mb-5 block" key={link}>{link}</a>)}</div>)}
      </footer>
    </main>
  );
}
