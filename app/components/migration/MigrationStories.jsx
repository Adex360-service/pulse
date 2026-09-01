"use client";

import { useEffect, useState } from "react";

export default function MigrationStories({ stories }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = window.setInterval(() => setActive((current) => (current + 1) % stories.length), 3500);
    return () => window.clearInterval(interval);
  }, [stories.length]);
  const move = (direction) => setActive((current) => (current + direction + stories.length) % stories.length);
  return <div className="relative mx-auto mt-14 max-w-[1160px] px-12 max-sm:mt-10 max-sm:px-0"><div className="overflow-hidden rounded-[26px] border border-[#b9a8ff] max-sm:rounded-lg"><div className="flex transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:duration-0" style={{ transform: `translateX(-${active * 100}%)` }}>{stories.map((story) => <a key={story.label} href={story.href} target="_blank" rel="noreferrer" aria-label={story.label} className="block aspect-[2.7/1] w-full shrink-0 rounded-[26px] bg-cover bg-center bg-no-repeat max-sm:rounded-lg" style={{ backgroundImage: `url("${story.image}")` }} />)}</div></div><button type="button" onClick={() => move(-1)} aria-label="Previous story" className="absolute top-1/2 left-0 grid h-14 w-14 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-0 bg-black text-[38px] font-light text-white max-sm:hidden">‹</button><button type="button" onClick={() => move(1)} aria-label="Next story" className="absolute top-1/2 right-0 grid h-14 w-14 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-0 bg-black text-[38px] font-light text-white max-sm:hidden">›</button><div className="mt-7 flex justify-center gap-2 max-sm:mt-[30px]" aria-label="Choose a story">{stories.map((story, index) => <button key={story.label} type="button" onClick={() => setActive(index)} aria-label={`Show story ${index + 1}`} aria-current={active === index} className={`h-2.5 w-2.5 cursor-pointer rounded-full border-0 ${active === index ? "bg-[#a143ff]" : "bg-[#dedbe1]"}`} />)}</div></div>;
}
