"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ZoneNavigator({ zones }) {
  const animationRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const goToZone = (event, zoneId) => {
    event.preventDefault();
    const target = document.getElementById(zoneId);
    if (!target) return;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    const start = window.scrollY;
    const destination = Math.max(
      0,
      target.getBoundingClientRect().top + start - 68,
    );
    const distance = destination - start;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, destination);
      window.history.replaceState(null, "", `#${zoneId}`);
      return;
    }
    const duration = Math.min(1300, Math.max(650, Math.abs(distance) * 0.38));
    let startedAt;
    const animate = (now) => {
      if (startedAt === undefined) startedAt = now;
      const elapsed = Math.min(1, (now - startedAt) / duration);
      const eased =
        elapsed < 0.5 ? 4 * elapsed ** 3 : 1 - (-2 * elapsed + 2) ** 3 / 2;
      window.scrollTo(0, start + distance * eased);
      if (elapsed < 1) animationRef.current = requestAnimationFrame(animate);
      else {
        animationRef.current = null;
        window.history.replaceState(null, "", `#${zoneId}`);
      }
    };
    animationRef.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    const sections = zones
      .map((zone) => document.getElementById(zone.id))
      .filter(Boolean);
    const update = () => {
      const first = sections[0]?.getBoundingClientRect();
      const last = sections.at(-1)?.getBoundingClientRect();
      setVisible(
        Boolean(
          first && last && first.top < window.innerHeight && last.bottom > 0,
        ),
      );
      const marker = window.innerHeight * 0.4;
      let current = 0;
      sections.forEach((section, index) => {
        if (section.getBoundingClientRect().top <= marker) current = index;
      });
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [zones]);
  return (
    <nav
      className={`fixed bottom-0 left-1/2 z-[95] flex -translate-x-1/2 overflow-hidden rounded-t-[14px] bg-[#35106d] text-white shadow-[0_-8px_30px_#25064f35] transition duration-300 max-sm:w-[calc(100%-24px)] ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"}`}
      aria-label="Retention zones"
    >
      {zones.map((zone, index) => (
        <Link
          key={zone.id}
          href={`#${zone.id}`}
          onClick={(event) => goToZone(event, zone.id)}
          className={`flex-1 whitespace-nowrap px-6 py-4 text-center text-sm font-semibold uppercase transition-colors max-sm:px-3 ${active === index ? (index === 3 ? "bg-[#ff5a0a]" : "bg-[#7135ff]") : "hover:bg-white/10"}`}
        >
          Zone {index + 1}
        </Link>
      ))}
    </nav>
  );
}
