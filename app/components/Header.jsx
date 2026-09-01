"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const menuLink = "group flex items-center gap-3 text-[16px] font-semibold text-[#17192b] transition-colors hover:text-[#7c36ed]";
const iconClass = "grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[16px] font-bold text-[#7041ce]";

function Chevron({ open = false }) {
  return <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 12 8" fill="none"><path d="m2 2 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function MenuButton({ id, openMenu, setOpenMenu, children }) {
  const open = openMenu === id;
  return (
    <button type="button" onMouseEnter={() => setOpenMenu(id)} onFocus={() => setOpenMenu(id)} onClick={() => setOpenMenu(open ? null : id)} aria-expanded={open} className={`relative flex h-[68px] items-center gap-2 border-0 bg-transparent px-0 text-sm font-medium after:absolute after:right-0 after:bottom-0 after:left-0 after:h-1 after:rounded-t after:bg-[#7041ce] after:transition-transform ${open ? "after:scale-x-100" : "after:scale-x-0"}`}>
      {children}<Chevron open={open} />
    </button>
  );
}

function Item({ icon, title, href, description }) {
  return <a className={menuLink} href={href}><span className={iconClass}>{icon}</span><span><strong className="block font-semibold">{title}</strong>{description && <small className="mt-0.5 block max-w-[230px] text-sm leading-[1.35] font-normal text-[#666]">{description}</small>}</span></a>;
}

function PlatformMenu() {
  return (
    <div className="absolute top-full left-[100px] z-[120] grid w-[750px] grid-cols-[140px_1fr] gap-8 rounded-b-2xl bg-white px-8 py-9 shadow-[0_18px_35px_#00000018]">
      <div className="border-r border-[#ddd] pr-7"><p className="mb-5 text-xs font-bold text-[#666] uppercase">Product</p><div className="grid gap-5"><Item icon="◔" title="Acquire" href="/acquire" /><Item icon="$" title="Retain" href="/retention" /><Item icon="✦" title="Manage" href="/management-features" /></div></div>
      <div><p className="mb-5 text-xs font-bold text-[#666] uppercase">Features</p><div className="grid grid-cols-2 gap-x-12 gap-y-5"><Item icon="⌘" title="Loop Flows" href="/feature/loop-flows" /><Item icon="▣" title="Customer Portal" href="/feature/customer-portal" /><Item icon="♧" title="Bundles" href="/feature/bundle-builder" /><Item icon="◈" title="Dunning Management" href="/feature/dunning-management" /><Item icon="⇄" title="Cancellation Flows" href="/feature/cancellation-flows" /><Item icon="◉" title="Upsell" href="/feature/upsell" /></div></div>
    </div>
  );
}

function StoriesMenu() {
  return (
    <div className="absolute top-full left-[210px] z-[120] grid w-[865px] grid-cols-[270px_1fr] gap-8 rounded-b-2xl bg-white px-9 py-9 shadow-[0_18px_35px_#00000018]">
      <div className="grid content-start gap-6"><Item icon="♛" title="Case Studies" href="/customer-stories" /><Item icon="★" title="Wall of love" href="/reviews" /><Item icon="▰" title="Template Gallery" href="/template-gallery" description="Personalize flows & reduce subscriber churn" /></div>
      <a href="/customer-stories/primal-queen" className="grid min-h-[200px] grid-cols-[55%_45%] overflow-hidden rounded-xl bg-[#faf8fb] p-3"><span className="rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a5633b3f28ba56e56def608_image%20(74).avif")' }} /><span className="flex flex-col p-3"><b className="text-sm text-[#8b43fd] uppercase">Primal Queen</b><strong className="mt-4 text-[15px] leading-[1.35]">Scaled subscription revenue 50× in under two years.</strong><span className="mt-auto text-sm font-semibold">Read success story →</span></span></a>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div className="absolute top-full left-[510px] z-[120] grid w-[580px] grid-cols-[220px_1fr] gap-8 rounded-b-2xl bg-white px-9 py-9 shadow-[0_18px_35px_#00000018]">
      <div className="grid gap-[18px]"><Item icon="▤" title="Blogs" href="/blog" /><Item icon="?" title="Help Centre" href="https://help.loopwork.co/en/" /><Item icon="◷" title="Developer Hub" href="https://developer.loopwork.co/reference/api-reference" /><Item icon="✣" title="Integrations directory" href="/integrations-overview" /><Item icon="▤" title="Changelog 2026" href="https://updates.loopwork.co/" /><Item icon="◉" title="Playbooks" href="/playbooks" /></div>
      <a href="https://demo.loopwork.co/" className="rounded-xl bg-[#faf8fb] p-3"><span className="block h-20 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019b4ed0faa0f83cf72454_Rectangle%203426%20(1).avif")' }} /><strong className="mt-3 block text-[15px]">Take a tour of our demo store</strong><p className="mt-2 text-sm leading-[1.45] text-[#555]">Get a sneak peek of our intuitive demo store now!</p><span className="mt-3 block text-sm font-medium">View demo store</span></a>
    </div>
  );
}

function CompareMenu() {
  const comparisons = [["Recharge", "/compare/recharge-alternative"], ["Skio", "/compare/skio-alternative"], ["Ordergroove", "/compare/ordergroove-alternative"], ["Stay AI", "/compare/stayai-alternative"]];
  return (
    <div className="absolute top-full right-[32px] z-[120] w-[390px] rounded-b-2xl bg-white px-8 py-8 shadow-[0_18px_35px_#00000018]">
      <div className="flex flex-wrap gap-4">{comparisons.map(([name, href]) => <a className="rounded-full bg-[linear-gradient(100deg,#f0ecff,#faeeee)] px-5 py-2 text-sm font-medium text-[#4b258d]" href={href} key={name}>{name}</a>)}</div>
      <form className="mt-8 rounded-xl bg-[#f8f7fb] p-4"><b className="text-base text-[#5630ae]">Get a detailed comparison</b><div className="mt-3 flex gap-3"><label className="sr-only" htmlFor="comparison-email">Email</label><input id="comparison-email" className="h-10 min-w-0 flex-1 rounded-xl border border-[#ddd] bg-white px-3 text-sm" type="email" placeholder="Enter your email" /><button className="h-10 rounded-full bg-[linear-gradient(90deg,#b274ff,#6f9bf5)] px-6 text-sm text-white" type="submit">Submit</button></div></form>
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  useEffect(() => {
    const close = (event) => event.key === "Escape" && setOpenMenu(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return <>
    <header className="sticky top-0 z-[110] h-[68px] border-b border-[#dedede] bg-white" onMouseLeave={() => setOpenMenu(null)}>
      <div className="relative mx-auto flex h-full w-[min(1280px,calc(100%-80px))] items-center gap-[42px] max-md:w-[calc(100%-40px)]">
        <Link href="/" className="w-[88px] shrink-0 leading-none text-[#8b43fd]" aria-label="Loop home"><svg className="h-auto w-full" viewBox="0 0 114 40"><path d="M8 8v14c0 6 4 9 10 9h7c8 0 12-5 12-11s-4-11-12-11-12 5-12 11 4 11 12 11h16c8 0 12-5 12-11S49 9 41 9s-12 5-12 11 4 11 12 11h16c8 0 12-5 12-11S65 9 57 9s-12 5-12 11 4 11 12 11h16c8 0 12-5 12-11S81 9 73 9s-12 5-12 11v18" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        <nav className="flex items-center gap-[34px] max-lg:hidden"><MenuButton id="platform" openMenu={openMenu} setOpenMenu={setOpenMenu}>Platform</MenuButton><MenuButton id="stories" openMenu={openMenu} setOpenMenu={setOpenMenu}>Success Stories</MenuButton><a className="text-sm font-medium" href="/migration">Migration</a><a className="text-sm font-medium" href="/pricing">Pricing</a><MenuButton id="resources" openMenu={openMenu} setOpenMenu={setOpenMenu}>Resources</MenuButton></nav>
        <div className="ml-auto flex items-center gap-[42px] max-lg:hidden"><MenuButton id="compare" openMenu={openMenu} setOpenMenu={setOpenMenu}>Comparing Loop with?</MenuButton><a href="/book-a-demo" className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(100deg,#8d43ff,#315be7)] px-[27px] py-[11px] text-[15px] font-semibold text-white">Book a demo</a></div>
        <details className="relative ml-auto hidden max-lg:block"><summary className="grid w-[34px] cursor-pointer list-none gap-[5px] [&::-webkit-details-marker]:hidden" aria-label="Open navigation"><i className="h-0.5 w-[27px] bg-[#282624]" /><i className="h-0.5 w-[27px] bg-[#282624]" /><i className="h-0.5 w-[27px] bg-[#282624]" /></summary><nav className="absolute top-[41px] right-[-20px] grid min-w-[240px] gap-4 bg-white p-5 shadow-[0_15px_40px_#0002]"><a href="/acquire">Platform</a><a href="/customer-stories">Success Stories</a><a href="/migration">Migration</a><a href="/pricing">Pricing</a><a href="/blog">Resources</a><a href="/book-a-demo">Book a demo</a></nav></details>
        {openMenu === "platform" && <PlatformMenu />}{openMenu === "stories" && <StoriesMenu />}{openMenu === "resources" && <ResourcesMenu />}{openMenu === "compare" && <CompareMenu />}
      </div>
    </header>
    {openMenu && <button className="fixed inset-0 top-[68px] z-[100] cursor-default border-0 bg-black/65" aria-label="Close menu" onClick={() => setOpenMenu(null)} />}
  </>;
}
