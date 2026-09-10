"use client";
import { useEffect } from "react";
import Reveal from "./Reveal";

export default function RetentionZone({ zone, index }) {
  useEffect(() => {
    let frame;
    const update = () => {
      frame = 0;
      const section = document.getElementById(zone.id);
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight * 0.72 - rect.top) / (window.innerHeight * 0.46),
        ),
      );
      section.style.setProperty(
        "--zone-pill-scale",
        String(1.42 - progress * 0.42),
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [zone.id]);
  const backgrounds = [
    "bg-[#DAF7E3]",
    "bg-[#DAF7E3]",
    "bg-[#DAF7E3]",
    "bg-[#DAF7E3]",
  ];
  return (
    <section
      id={zone.id}
      data-zone-index={index}
      data-zone-section
      className={`relative scroll-mt-24 px-5 py-28 text-[#32135e] max-sm:py-20 ${backgrounds[index]}`}
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <span className="retention-zone-pill relative z-20 inline-flex min-w-[200px] justify-center rounded-full bg-[linear-gradient(100deg,#347aff,#7900ff)] px-8 py-4 text-base font-semibold uppercase tracking-wider text-white">
            {zone.eyebrow}
          </span>
          <h2 className="mx-auto mt-8 max-w-[940px] text-[clamp(28px,3vw,44px)] leading-[1.22] font-normal tracking-[-.035em]">
            {zone.description}
          </h2>
        </div>
        <div
          className={`mt-16 grid gap-6 ${zone.cards.length === 2 || index !== 3 ? "grid-cols-2 max-md:grid-cols-1" : "grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1"}`}
        >
          {zone.cards.map((card, cardIndex) => (
            <Reveal
              key={card.title}
              className={`h-full retention-delay-${cardIndex}`}
            >
              <article className="flex h-full flex-col overflow-hidden rounded-[14px] bg-[#f9f9ff] p-4">
                <div className="overflow-hidden rounded-[10px] bg-white">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="aspect-[1.6] w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 pb-2 leading-6 text-[#47327b]">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
