"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LiquidButtonLayers from "./ui/LiquidButtonLayers";

const menuLink =
  "group flex items-center gap-3 text-[16px] font-semibold text-[#17192b] transition-colors hover:text-[#7c36ed]";
const iconClass =
  "grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[16px] font-bold text-[#7041ce]";

function Chevron({ open = false }) {
  return (
    <svg
      className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 12 8"
      fill="none"
    >
      <path
        d="m2 2 4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuButton({ id, openMenu, setOpenMenu, children }) {
  const open = openMenu === id;
  return (
    <button
      data-mega-trigger
      type="button"
      onMouseEnter={() => setOpenMenu(id)}
      onFocus={() => setOpenMenu(id)}
      onClick={() => setOpenMenu(open ? null : id)}
      aria-expanded={open}
      className={`relative flex h-[68px] items-center gap-2 border-0 bg-transparent px-0 text-sm font-medium text-[#2d2c2b] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-1 after:rounded-t after:bg-[#7041ce] after:transition-transform ${open ? "after:scale-x-100" : "after:scale-x-0"}`}
    >
      {children}
      <Chevron open={open} />
    </button>
  );
}

function Item({ icon, title, href, description }) {
  const resolvedHref =
    title === "Help Centre"
      ? "/help-center"
      : title === "Developer Hub"
        ? "/developer-hub"
        : href;
  const content = (
    <>
      <span className={iconClass}>{icon}</span>
      <span>
        <strong className="block font-semibold">{title}</strong>
        {description && (
          <small className="mt-0.5 block max-w-[230px] text-sm leading-[1.35] font-normal text-[#666]">
            {description}
          </small>
        )}
      </span>
    </>
  );
  return resolvedHref.startsWith("http") ? (
    <a className={menuLink} href={resolvedHref}>{content}</a>
  ) : (
    <Link className={menuLink} href={resolvedHref}>{content}</Link>
  );
}

function PlatformMenu() {
  return (
     <div
      data-mega-panel
      className="absolute top-full left-[100px] z-[120] grid w-[1060px] grid-cols-[330px_1fr] gap-8 rounded-b-2xl bg-white px-8 py-9 shadow-[0_18px_35px_#00000018]"
    >
      <div className="border-r border-[#ddd] pr-7">
        <p className="mb-5 text-xs font-bold text-[#666] uppercase">Product</p>
        <div className="grid gap-5">
          <Item icon="✦" title="Email Marketing" href="/acquire" />
          <Item icon="◔" title="WhatsApp Marketing " href="/retention" />
          <Item icon="$" title="Web Push Notifications" href="/management-features" />
          <Item icon="$" title="Analytics" href="/retention" />
        </div>
      </div>
      <div>
        <p className="mb-5 text-xs font-bold text-[#666] uppercase">Features</p>
        <div className="grid grid-cols-1 gap-x-12 gap-y-5">
          <Item icon="⌘" title="Abandoned Cart Recovery" href="/feature/loop-flows" />
          <Item
            icon="▣"
            title="Customer Retention & Winback"
            href="/feature/customer-portal"
          />
          <Item icon="♧" title="New Product Launches" href="/feature/bundle-builder" />
          <Item
            icon="◈"
            title="Customer Segmentation"
            href="/feature/dunning-management"
          />
          <Item
            icon="⇄"
            title="Restock & Price Alerts"
            href="/feature/cancellation-flows"
          />
          <Item icon="◉" title="Delivery Updates" href="/feature/upsell" />
          {/* <Item icon="◉" title="Smart Customer Segmentation" href="/feature/upsell" />
          <Item icon="◉" title="Custom Collection Sorting" href="/feature/upsell" />
          <Item icon="◉" title="Automatic Out-of-Stock Management" href="/feature/upsell" /> */}
        </div>
      </div>
    </div>
  );
}

function StoriesMenu() {
  return (
    <div
      data-mega-panel
      className="absolute top-full left-[210px] z-[120] grid w-[865px] grid-cols-[270px_1fr] gap-8 rounded-b-2xl bg-white px-9 py-9 shadow-[0_18px_35px_#00000018]"
    >
      <div className="grid content-start gap-6">
        <Item icon="♛" title="Case Studies" href="/customer-stories" />
        <Item icon="★" title="Wall of love" href="/reviews" />
        <Item
          icon="▰"
          title="Template Gallery"
          href="/template-gallery"
          description="Personalize flows & reduce subscriber churn"
        />
      </div>
      <Link
        href="/customer-stories/primal-queen"
        className="grid min-h-[200px] grid-cols-[55%_45%] overflow-hidden rounded-xl bg-[#faf8fb] p-3"
      >
        <span
          className="rounded-lg bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a5633b3f28ba56e56def608_image%20(74).avif")',
          }}
        />
        <span className="flex flex-col p-3">
          <b className="text-sm text-[#8b43fd] uppercase">Primal Queen</b>
          <strong className="mt-4 text-[15px] leading-[1.35]">
            Scaled subscription revenue 50× in under two years.
          </strong>
          <span className="mt-auto text-sm font-semibold">
            Read success story →
          </span>
        </span>
      </Link>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div
      data-mega-panel
      className="absolute top-full left-[510px] z-[120] grid w-[580px] grid-cols-[220px_1fr] gap-8 rounded-b-2xl bg-white px-9 py-9 shadow-[0_18px_35px_#00000018]"
    >
      <div className="grid gap-[18px]">
        <Item icon="▤" title="Blogs" href="/blog" />
        <Item
          icon="?"
          title="Help Centre"
          href="https://help.loopwork.co/en/"
        />
        <Item
          icon="◷"
          title="Developer Hub"
          href="https://developer.loopwork.co/reference/api-reference"
        />
        <Item
          icon="✣"
          title="Integrations directory"
          href="/integrations-overview"
        />
        <Item
          icon="▤"
          title="Changelog 2026"
          href="https://updates.loopwork.co/"
        />
        <Item icon="◉" title="Playbooks" href="/playbooks" />
      </div>
      <a
        href="https://demo.loopwork.co/"
        className="rounded-xl bg-[#faf8fb] p-3"
      >
        <span
          className="block h-20 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019b4ed0faa0f83cf72454_Rectangle%203426%20(1).avif")',
          }}
        />
        <strong className="mt-3 block text-[15px]">
          Take a tour of our demo store
        </strong>
        <p className="mt-2 text-sm leading-[1.45] text-[#555]">
          Get a sneak peek of our intuitive demo store now!
        </p>
        <span className="mt-3 block text-sm font-medium">View demo store</span>
      </a>
    </div>
  );
}

function CompareMenu() {
  const comparisons = [
    ["Recharge", "/compare/recharge-alternative"],
    ["Skio", "/compare/skio-alternative"],
    ["Ordergroove", "/compare/ordergroove-alternative"],
    ["Stay AI", "/compare/stayai-alternative"],
  ];
  return (
    <div
      data-mega-panel
      className="absolute top-full right-[32px] z-[120] w-[390px] rounded-b-2xl bg-white px-8 py-8 shadow-[0_18px_35px_#00000018]"
    >
      <div className="flex flex-wrap gap-4">
        {comparisons.map(([name, href]) => (
          <Link
            className="rounded-full bg-[linear-gradient(100deg,#f0ecff,#faeeee)] px-5 py-2 text-sm font-medium text-[#4b258d]"
            href={href}
            key={name}
          >
            {name}
          </Link>
        ))}
      </div>
      <form className="mt-8 rounded-xl bg-[#f8f7fb] p-4">
        <b className="text-base text-[#5630ae]">Get a detailed comparison</b>
        <div className="mt-3 flex gap-3">
          <label className="sr-only" htmlFor="comparison-email">
            Email
          </label>
          <input
            id="comparison-email"
            className="h-10 min-w-0 flex-1 rounded-xl border border-[#ddd] bg-white px-3 text-sm"
            type="email"
            placeholder="Enter your email"
          />
          <button
            className="h-10 rounded-full bg-[linear-gradient(90deg,#b274ff,#6f9bf5)] px-6 text-sm text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function MobileRouteLink({ href, pathname, close, children, className = "" }) {
  const resolvedHref =
    href === "https://help.loopwork.co/en/"
      ? "/help-center"
      : href.includes("developer.loopwork.co")
        ? "/developer-hub"
        : href;
  const active =
    resolvedHref !== "/" &&
    (pathname === resolvedHref || pathname.startsWith(`${resolvedHref}/`));
  const styles = `${active ? "text-[#7c36ed]" : "text-[#292929]"} ${className}`;
  if (resolvedHref.startsWith("http"))
    return (
      <a className={styles} href={resolvedHref} onClick={close}>
        {children}
      </a>
    );
  return (
    <Link className={styles} href={resolvedHref} onClick={close}>
      {children}
    </Link>
  );
}

function MobileAccordion({ id, label, openSection, setOpenSection, children }) {
  const open = openSection === id;
  return (
    <div>
      <button
        className="flex w-full items-center gap-3 border-0 bg-transparent px-0 py-3 text-left text-[16px] text-[#292929]"
        type="button"
        aria-expanded={open}
        onClick={() => setOpenSection(open ? null : id)}
      >
        {label}
        <Chevron open={open} />
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function MobileDrawer({ open, close, pathname }) {
  const [openSection, setOpenSection] = useState(null);
  const mobileItem = "flex items-center gap-3 text-[16px] font-semibold";
  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-x-0 top-[68px] z-[105] h-[calc(100dvh-68px)] overflow-y-auto bg-[#e4e4e4] px-[18px] py-5 transition-[transform,visibility] duration-300 ease-[cubic-bezier(.22,1,.36,1)] lg:hidden ${open ? "visible translate-y-0" : "invisible -translate-y-full"}`}
    >
      <MobileAccordion
        id="platform"
        label="Platform"
        openSection={openSection}
        setOpenSection={setOpenSection}
      >
        <div className="rounded-b-2xl border-t-4 border-[#6030aa] bg-white px-8 py-6 shadow-[0_20px_35px_#00000015]">
          <p className="mb-5 text-sm font-bold text-[#666] uppercase">
            Product
          </p>
          <div className="grid gap-5">
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/acquire"
            >
              <span className={iconClass}>◔</span>Email Marketing
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/retention"
            >
              <span className={iconClass}>$</span>WhatsApp Marketing 
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/management-features"
            >
              <span className={iconClass}>✦</span>Web Push Notifications
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/management-features"
            >
              <span className={iconClass}>✦</span>Analytics
            </MobileRouteLink>
            
          </div>
          <p className="mt-7 mb-4 text-sm font-bold text-[#666] uppercase">
            Features
          </p>
          <div className="grid gap-5">
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/feature/loop-flows"
            >
              <span className={iconClass}>⌘</span>Abandoned Cart Recovery
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/feature/bundle-builder"
            >
              <span className={iconClass}>♧</span>Customer Retention & Winback
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/feature/cancellation-flows"
            >
              <span className={iconClass}>⇄</span>New Product Launches
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/feature/customer-portal"
            >
              <span className={iconClass}>▣</span>Customer Segmentation
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/feature/dunning-management"
            >
              <span className={iconClass}>◈</span>Restock & Price Alerts
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/feature/upsell"
            >
              <span className={iconClass}>◉</span>Delivery Updates
            </MobileRouteLink>
            {/* <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/feature/dunning-management"
            >
              <span className={iconClass}>◈</span>Custom Collection Sorting
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/feature/upsell"
            >
              <span className={iconClass}>◉</span>Automatic Out-of-Stock Management
            </MobileRouteLink> */}
          </div>
        </div>
      </MobileAccordion>
      <MobileAccordion
        id="stories"
        label="Success Stories"
        openSection={openSection}
        setOpenSection={setOpenSection}
      >
        <div className="rounded-b-2xl border-t-4 border-[#6030aa] bg-white px-8 py-6 shadow-[0_20px_35px_#00000015]">
          <div className="grid gap-5">
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/customer-stories"
            >
              <span className={iconClass}>♛</span>Case Studies
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/reviews"
            >
              <span className={iconClass}>★</span>Wall of love
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/template-gallery"
            >
              <span className={iconClass}>▰</span>
              <span>
                Template Gallery
                <small className="block text-sm font-normal text-[#666]">
                  Personalize flows & reduce subscriber churn
                </small>
              </span>
            </MobileRouteLink>
          </div>
          <MobileRouteLink
            pathname={pathname}
            close={close}
            href="/customer-stories/primal-queen"
            className="mt-6 block rounded-xl bg-[#faf8fb] p-3"
          >
            <span
              className="block aspect-[1.45] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a5633b3f28ba56e56def608_image%20(74).avif")',
              }}
            />
            <b className="mt-4 block text-base text-[#8b43fd] uppercase">
              Primal Queen
            </b>
            <strong className="mt-3 block text-[15px]">
              Scaled subscription revenue 50× in under two years.
            </strong>
            <span className="mt-4 block text-sm font-semibold">
              Read success story →
            </span>
          </MobileRouteLink>
        </div>
      </MobileAccordion>
      <MobileRouteLink
        className="block py-5 text-[16px]"
        pathname={pathname}
        close={close}
        href="/migration"
      >
        Migration
      </MobileRouteLink>
      <MobileRouteLink
        className="block py-5 text-[16px]"
        pathname={pathname}
        close={close}
        href="/pricing"
      >
        Pricing
      </MobileRouteLink>
      <MobileAccordion
        id="resources"
        label="Resources"
        openSection={openSection}
        setOpenSection={setOpenSection}
      >
        <div className="rounded-b-2xl border-t-4 border-[#6030aa] bg-white px-8 py-6 shadow-[0_20px_35px_#00000015]">
          <div className="grid gap-5">
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/blog"
            >
              <span className={iconClass}>▤</span>Blogs
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="https://help.loopwork.co/en/"
            >
              <span className={iconClass}>?</span>Help Centre
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="https://developer.loopwork.co/reference/api-reference"
            >
              <span className={iconClass}>◷</span>Developer Hub
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/integrations-overview"
            >
              <span className={iconClass}>✣</span>Integrations directory
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="https://updates.loopwork.co/"
            >
              <span className={iconClass}>▤</span>Changelog 2026
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/playbooks"
            >
              <span className={iconClass}>◉</span>Playbooks
            </MobileRouteLink>
          </div>
          <a
            href="https://demo.loopwork.co/"
            className="mt-6 block rounded-xl bg-[#faf8fb] p-3"
          >
            <span
              className="block h-24 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/6a019b4ed0faa0f83cf72454_Rectangle%203426%20(1).avif")',
              }}
            />
            <strong className="mt-3 block text-[15px]">
              Take a tour of our demo store
            </strong>
            <p className="mt-2 text-sm">
              Get a sneak peek of our intuitive demo store now!
            </p>
            <span className="mt-3 block text-sm">View demo store</span>
          </a>
        </div>
      </MobileAccordion>
      <MobileAccordion
        id="compare"
        label="Comparing subscriptions app?"
        openSection={openSection}
        setOpenSection={setOpenSection}
      >
        <div className="rounded-b-2xl border-t-4 border-[#6030aa] bg-white px-8 py-6 shadow-[0_20px_35px_#00000015]">
          <div className="grid gap-5">
            <MobileRouteLink
              className="font-semibold"
              pathname={pathname}
              close={close}
              href="/compare/recharge-alternative"
            >
              Loop vs. Recharge
            </MobileRouteLink>
            <MobileRouteLink
              className="font-semibold"
              pathname={pathname}
              close={close}
              href="/compare/skio-alternative"
            >
              Loop vs. Skio
            </MobileRouteLink>
            <MobileRouteLink
              className="font-semibold"
              pathname={pathname}
              close={close}
              href="/compare/ordergroove-alternative"
            >
              Loop vs. Ordergroove
            </MobileRouteLink>
            <MobileRouteLink
              className="font-semibold"
              pathname={pathname}
              close={close}
              href="/compare/stayai-alternative"
            >
              Loop vs. Stay.ai
            </MobileRouteLink>
          </div>
          <form className="mt-6 rounded-xl bg-[#f8f7fb] p-4">
            <b className="text-base text-[#5630ae]">
              Get a detailed comparison
            </b>
            <div className="mt-3 flex gap-3">
              <input
                className="h-11 min-w-0 flex-1 rounded-xl border border-[#ddd] px-3"
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button className="rounded-full bg-[linear-gradient(90deg,#b274ff,#6f9bf5)] px-6 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </MobileAccordion>
      <MobileRouteLink
        pathname={pathname}
        close={close}
        href="/book-a-demo"
        className="mt-6 block rounded-full bg-[#292a2e] px-6 py-4 text-center text-lg font-semibold !text-white"
      >
        Book demo
      </MobileRouteLink>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const close = (event) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const closeMenuOutsideMegaArea = (event) => {
    if (!event.target.closest("[data-mega-trigger], [data-mega-panel]")) {
      setOpenMenu(null);
    }
  };

  return (
    <>
      <header
        className="sticky top-0 z-[110] h-[68px] border-b border-[#dedede] bg-white"
        onMouseMove={closeMenuOutsideMegaArea}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="relative mx-auto flex h-full w-[min(1280px,calc(100%-80px))] items-center gap-[42px] max-md:w-[calc(100%-40px)]">
          <Link
            href="/"
            className="w-[88px] shrink-0 leading-none text-[#8b43fd]"
            aria-label="Loop home"
          >
            <img src="/images/pulse-logo.png" />
          </Link>
          <nav className="flex items-center gap-[34px] max-lg:hidden">
            <MenuButton
              id="platform"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            >
              Platform
            </MenuButton>
            <MenuButton
              id="stories"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            >
              Success Stories
            </MenuButton>
            <Link
              className={`text-sm font-medium ${pathname === "/migration" ? "text-[#8b43fd]" : "text-[#2d2c2b]"}`}
              href="/migration"
            >
              Migration
            </Link>
            <Link className={`text-sm font-medium ${pathname === "/pricing" ? "text-[#8b43fd]" : "text-[#2d2c2b]"}`} href="/pricing">
              Pricing
            </Link>
            <MenuButton
              id="resources"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            >
              Resources
            </MenuButton>
          </nav>
          <div className="ml-auto flex items-center gap-[42px] max-lg:hidden">
            <MenuButton
              id="compare"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            >
              Comparing Loop with?
            </MenuButton>
            <Link
              href="/book-a-demo"
              className="loop-liquid-button inline-flex items-center justify-center rounded-full bg-[linear-gradient(100deg,#8d43ff,#315be7)] px-[27px] py-[11px] text-[15px] font-semibold text-white"
            >
              Book a demo
              <LiquidButtonLayers />
            </Link>
          </div>
          <button
            type="button"
            className={`-mr-5 ml-auto hidden h-[68px] w-[62px] place-items-center border-0 transition-colors max-lg:grid ${mobileOpen ? "bg-[#c9c9c9]" : "bg-transparent"}`}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="grid gap-[5px]">
              <i
                className={`block h-0.5 w-[27px] ${mobileOpen ? "bg-white" : "bg-[#282624]"}`}
              />
              <i
                className={`block h-0.5 w-[27px] ${mobileOpen ? "bg-white" : "bg-[#282624]"}`}
              />
              <i
                className={`block h-0.5 w-[27px] ${mobileOpen ? "bg-white" : "bg-[#282624]"}`}
              />
            </span>
          </button>
          {openMenu === "platform" && <PlatformMenu />}
          {openMenu === "stories" && <StoriesMenu />}
          {openMenu === "resources" && <ResourcesMenu />}
          {openMenu === "compare" && <CompareMenu />}
        </div>
      </header>
      <MobileDrawer
        open={mobileOpen}
        close={() => setMobileOpen(false)}
        pathname={pathname}
      />
      {openMenu && (
        <button
          className="fixed inset-0 top-[68px] z-[100] cursor-default border-0 bg-black/65"
          aria-label="Close menu"
          onClick={() => setOpenMenu(null)}
        />
      )}
    </>
  );
}
