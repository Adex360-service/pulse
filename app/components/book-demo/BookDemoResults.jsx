"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BookDemoResults({ results }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % results.length),
      4500,
    );
    return () => window.clearInterval(timer);
  }, [results.length]);
  const result = results[active];
  return (
    <div>
      <Link
        href={result.href}
        className="grid h-[364px] overflow-hidden rounded-lg border border-[#ded9e3] bg-white text-[#18131e] sm:grid-cols-[43%_57%] max-sm:h-auto"
      >
        <img
          src={result.image}
          alt=""
          className="h-[364px] w-full object-cover max-sm:h-[300px]"
        />
        <div className="flex flex-col justify-between p-8">
          <h3 className="max-w-[330px] text-[20px] leading-[1.35] font-semibold">
            {result.title}
          </h3>
          <div className="mt-8">
            <strong className="block font-[family-name:var(--font-display)] text-[36px] leading-none">
              {result.metric}
            </strong>
            <span className="mt-1.5 block text-[13px] text-[#514b57]">
              {result.label}
            </span>
          </div>
        </div>
      </Link>
      <div className="mt-3 flex justify-start gap-1.5 pl-0.5">
        {results.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show result ${index + 1}`}
            className={`h-1.5 w-1.5 rounded-full border-0 ${active === index ? "bg-[#77727d]" : "bg-[#bbb7c0]"}`}
          />
        ))}
      </div>
    </div>
  );
}
