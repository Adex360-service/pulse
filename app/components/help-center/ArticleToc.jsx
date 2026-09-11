"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ArticleToc({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  useEffect(() => {
    const elements = sections.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-12% 0px -72% 0px", threshold: [0, 1] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  return <aside className="sticky top-8 self-start border-l border-[#d5d5d5] max-md:hidden">
    {sections.map(({ id, title }) => <Link
      href={`#${id}`}
      key={id}
      onClick={() => setActiveId(id)}
      className={`-ml-px block border-l-2 py-2 pl-7 text-[14px] leading-5 transition-colors ${activeId === id ? "border-[#676767] text-[#202020]" : "border-transparent text-[#626262] hover:text-[#202020]"}`}
    >{title}</Link>)}
  </aside>;
}
