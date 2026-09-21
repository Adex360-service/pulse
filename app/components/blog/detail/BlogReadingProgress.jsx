"use client";

import { useEffect, useState } from "react";

export default function BlogReadingProgress({ slug }) {
  const [progress, setProgress] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(68);

  useEffect(() => {
    let frame = 0;
    const header = document.querySelector("body > header, body > :not(main) header, header.sticky");
    function update() {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(distance > 0 ? Math.min(100, Math.max(0, (window.scrollY / distance) * 100)) : 0);
      if (header) setHeaderHeight(header.getBoundingClientRect().height);
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    if (header) observer.observe(header);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [slug]);

  return (
    <div role="progressbar" aria-label="Article reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)} className="pointer-events-none fixed right-0 left-0 z-[111] h-[3px] bg-[#ede5f6]" style={{ top: headerHeight }}>
      <div className="h-full w-full origin-left bg-[#8b43fd]" style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  );
}
