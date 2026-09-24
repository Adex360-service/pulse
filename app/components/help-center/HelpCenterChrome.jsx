import Link from "next/link";

const footerGroups = [
  [
    "Website links",
    [
      ["Home", "/"],
      ["Pricing", "/pricing"],
    ],
  ],
  [
    "Resources",
    [
      ["Developer hub", "/articles/using-loop-webhooks"],
      ["Blogs", "/blog"],
      ["Success stories", "/success-stories"],
    ],
  ],

  [
    "Others",
    [
      ["Terms of service", "/"],
      ["Privacy", "/"],
    ],
  ],
];

export function HelpCenterHeader({ home = false, query = "", onQueryChange }) {
  return (
    <header
      className={
        home
          ? "bg-[linear-gradient(180deg,#763cff_0%,#813fff_56%,#eee5ff_100%)] pb-40 text-white max-sm:pb-28"
          : "h-[210px] bg-[#793cff] text-white"
      }
    >
      <div className="mx-auto flex w-[min(960px,calc(100%-40px))] items-center justify-between pt-5">
        <Link href="/help-center">
          <img
            src="/images/pulse-new-logo.png"
            alt="Pulse"
            className="h-auto w-[88px] object-contain"
          />
        </Link>
        <nav className="flex gap-7 text-[14px] font-semibold">
          <Link href="/">Go to website</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>
      </div>
      <div
        className={
          home
            ? "mx-auto mt-24 w-[min(960px,calc(100%-40px))] max-sm:mt-16"
            : "mx-auto mt-10 w-[min(960px,calc(100%-40px))]"
        }
      >
        {home && (
          <h1 className="text-[28px] font-bold">How can we help you?</h1>
        )}
        <label className={home ? "relative mt-6 block" : "relative block"}>
          <span className="sr-only">Search for articles</span>
          <svg
            className="absolute top-1/2 left-5 h-6 w-6 -translate-y-1/2"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="2.2"
            />
            <path
              d="m16 16 5 5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
          <input
            {...(onQueryChange
              ? { value: query, onChange: onQueryChange }
              : { defaultValue: "" })}
            className="h-[64px] w-full rounded-[19px] border border-white/10 bg-white/20 px-14 text-[18px] text-white outline-none placeholder:text-white/90 focus:bg-white focus:text-[#333] focus:placeholder:text-[#777]"
            placeholder="Search for articles..."
          />
        </label>
      </div>
    </header>
  );
}

export function HelpCenterFooter() {
  return (
    <footer className="mx-auto mt-36 grid w-[min(960px,calc(100%-40px))] grid-cols-[1.3fr_repeat(3,1fr)] gap-12 pb-12 text-[14px] text-[#9ca7b2] max-md:grid-cols-2">
      <div>
        <img
          src="/images/pulse-new-logo.png"
          alt="Pulse"
          className="h-auto w-[92px] object-contain"
        />
      </div>
      {footerGroups.map(([title, links]) => (
        <div key={title}>
          <h2 className="mb-7 font-semibold text-[#929da8]">{title}</h2>
          {links.map(([label, href]) => (
            <Link href={href} className="mb-5 block" key={label}>
              {label}
            </Link>
          ))}
        </div>
      ))}
    </footer>
  );
}
