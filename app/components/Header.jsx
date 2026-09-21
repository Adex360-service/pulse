"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LiquidButtonLayers from "./ui/LiquidButtonLayers";

const menuLink =
  "group flex items-center gap-3 text-[16px] font-semibold text-[#17192b] transition-colors hover:text-[#7c36ed]";
const iconClass =
  "grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[#7041ce] [&>svg]:h-[18px] [&>svg]:w-[18px]";

function Icon({ name }) {
  const paths = {
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M8.5 8.5c.2 2.7 2.3 5 5 5.5l1.2-1.2" />
      </>
    ),
    push: (
      <>
        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
        <path d="M10 21h4" />
      </>
    ),
    analytics: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h17" />
        <path d="m7 15 3-4 3 2 5-6" />
      </>
    ),
    blog: (
      <>
        <path d="M5 3h10l4 4v14H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M15 3v5h4M7 12h10M7 16h7" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.7 9a2.4 2.4 0 1 1 3.8 1.9c-.9.6-1.5 1-1.5 2.1M12 16h.01" />
      </>
    ),
    developer: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
      </>
    ),
    integrations: (
      <>
        <path d="M9 7V5a2 2 0 1 1 4 0v2M15 9h2a2 2 0 1 1 0 4h-2M9 15H7a2 2 0 1 1 0-4h2" />
        <rect x="9" y="7" width="6" height="10" rx="2" />
      </>
    ),
  };
  const shape = paths[name];

  if (!shape) return name;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shape}
    </svg>
  );
}

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
        ? "/articles/using-loop-webhooks"
        : href;
  const content = (
    <>
      <span className={iconClass}>
        <Icon name={icon} />
      </span>
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
    <a className={menuLink} href={resolvedHref}>
      {content}
    </a>
  ) : (
    <Link className={menuLink} href={resolvedHref}>
      {content}
    </Link>
  );
}

function PlatformMenu() {
  return (
    <div
      data-mega-panel
      className="absolute top-full left-[100px] z-[120] grid grid-cols-[330px_1fr] gap-8 rounded-b-2xl bg-white px-8 py-9 shadow-[0_18px_35px_#00000018]"
    >
      <div className="border-r border-[#ddd] pr-7">
        <p className="mb-5 text-xs font-bold text-[#666] uppercase">Product</p>
        <div className="grid gap-5">
          <Item icon="email" title="Email Marketing" href="/email-marketing" />
          <Item
            icon="whatsapp"
            title="WhatsApp Marketing"
            href="/whatsapp-marketing"
          />
          <Item
            icon="push"
            title="Web Push Notifications"
            href="/web-push-notifications"
          />
          <Item icon="analytics" title="Analytics" href="/analytics" />
        </div>
      </div>
      <div>
        <p className="mb-5 text-xs font-bold text-[#666] uppercase">Features</p>
        <div className="grid grid-cols-1 gap-x-12 gap-y-5">
          <Item
            icon="⌘"
            title="Abandoned Cart Recovery"
            href="/email-marketing"
          />
          <Item
            icon="▣"
            title="Customer Retention & Winback"
            href="/email-marketing"
          />
          <Item icon="♧" title="Templates" href="/email-marketing" />
          <Item
            icon="◈"
            title="Customer Segmentation"
            href="/email-marketing"
          />
          <Item icon="◉" title="Delivery Updates" href="/email-marketing" />
        </div>
      </div>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div
      data-mega-panel
      className="absolute top-full left-[410px] z-[120] rounded-b-2xl bg-white px-9 py-9 shadow-[0_18px_35px_#00000018]"
    >
      <div className="grid gap-[18px]">
        <Item icon="blog" title="Blogs" href="/blog" />
        <Item icon="help" title="Help Centre" href="/help-center" />
        <Item
          icon="developer"
          title="Developer Hub"
          href="/articles/using-loop-webhooks"
        />
        <Item icon="integrations" title="Integrations" href="/integrations" />
      </div>
    </div>
  );
}

function MobileRouteLink({ href, pathname, close, children, className = "" }) {
  const resolvedHref =
    href === "https://help.loopwork.co/en/"
      ? "/help-center"
      : href.includes("developer.loopwork.co")
        ? "/articles/using-loop-webhooks"
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
              href="/email-marketing"
            >
              <span className={iconClass}>
                <Icon name="email" />
              </span>
              Email Marketing
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/whatsapp-marketing"
            >
              <span className={iconClass}>
                <Icon name="whatsapp" />
              </span>
              WhatsApp Marketing
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/web-push-notifications"
            >
              <span className={iconClass}>
                <Icon name="push" />
              </span>
              Web Push Notifications
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/analytics"
            >
              <span className={iconClass}>
                <Icon name="analytics" />
              </span>
              Analytics
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
              href="/email-marketing"
            >
              <span className={iconClass}>⌘</span>Abandoned Cart Recovery
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/email-marketing"
            >
              <span className={iconClass}>♧</span>Customer Retention & Winback
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/email-marketing"
            >
              <span className={iconClass}>⇄</span>Templates
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/email-marketing"
            >
              <span className={iconClass}>▣</span>Customer Segmentation
            </MobileRouteLink>

            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/email-marketing"
            >
              <span className={iconClass}>◉</span>Delivery Updates
            </MobileRouteLink>
          </div>
        </div>
      </MobileAccordion>

      <MobileRouteLink
        className="block py-5 text-[16px]"
        pathname={pathname}
        close={close}
        href="/success-stories"
      >
        Success Stories
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
              <span className={iconClass}>
                <Icon name="blog" />
              </span>
              Blogs
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/help-center"
            >
              <span className={iconClass}>
                <Icon name="help" />
              </span>
              Help Centre
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/articles/using-loop-webhooks"
            >
              <span className={iconClass}>
                <Icon name="developer" />
              </span>
              Developer Hub
            </MobileRouteLink>
            <MobileRouteLink
              className={mobileItem}
              pathname={pathname}
              close={close}
              href="/integrations"
            >
              <span className={iconClass}>
                <Icon name="integration" />
              </span>
              Integrations
            </MobileRouteLink>
          </div>
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
            aria-label="Pulse home"
          >
            <img src="/images/pulse-logo.png" alt="Pulse" />
          </Link>
          <nav className="flex items-center gap-[34px] max-lg:hidden">
            <MenuButton
              id="platform"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            >
              Platform
            </MenuButton>
            <Link
              className={`text-sm font-medium ${pathname === "/success-stories" ? "text-[#8b43fd]" : "text-[#2d2c2b]"}`}
              href="/success-stories"
            >
              Success Stories
            </Link>
            <Link
              className={`text-sm font-medium ${pathname === "/pricing" ? "text-[#8b43fd]" : "text-[#2d2c2b]"}`}
              href="/pricing"
            >
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
          <div className="ml-auto flex items-center gap-5 max-lg:hidden">
            <Link
              href="https://retention.universal-apps.com/login"
              target="_blank"
              className="group inline-flex items-center gap-2 border-b border-[#8b43fd] pb-1 text-[#8b43fd]"
            >
              Login
              <svg
                className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 15 15 5m0 0H7m8 0v8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="https://retention.universal-apps.com/register"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-[#8b43fd] text-[#8b43fd] px-[27px] py-[11px] text-[15px] font-semibold"
            >
              Sign up
            </Link>

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
          {openMenu === "resources" && <ResourcesMenu />}
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
