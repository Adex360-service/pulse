"use client";

import { useId, useState } from "react";
import Visual from "./AnalyticsVisual";

export default function AnalyticsFeaturePanels({ items }) {
  const [active, setActive] = useState(0);
  const id = useId();
  return (
    <div className="grid grid-cols-[1fr_2fr] items-start gap-[7%] max-[1000px]:grid-cols-[1fr_1.5fr] max-[1000px]:gap-[35px] max-[700px]:grid-cols-1 max-[700px]:gap-7">
      <div className="pt-1">
        {items.map((item, index) => (
          <div className="border-b border-[#d6d3d0] last:border-b-0" key={item.title}>
            <h3 className="font-[family-name:var(--font-inter)] text-[21px] leading-[1.3] font-semibold max-[700px]:text-[19px]">
              <button
                className={`w-full py-6 text-left max-[700px]:py-[18px] ${index === 0 ? "min-[700px]:pt-3" : ""} ${active === index ? "text-[#2d2c2b]" : "text-[#9a9691]"}`}
                id={`${id}-button-${index}`}
                aria-expanded={active === index}
                aria-controls={`${id}-copy-${index} ${id}-image`}
                onClick={() => setActive(index)}
              >
                {item.title}
              </button>
            </h3>
            <div id={`${id}-copy-${index}`} hidden={active !== index}>
              <p className="mt-0.5 mb-14 text-base leading-[1.55] text-[#55514f] max-[1000px]:mb-6 max-[700px]:mb-[26px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div id={`${id}-image`} className="min-w-0" role="region" aria-labelledby={`${id}-button-${active}`}>
        <Visual key={items[active].asset} asset={items[active].asset} alt={items[active].title} className="aspect-[3/2] animate-analytics-image object-contain motion-reduce:animate-none" />
      </div>
    </div>
  );
}
