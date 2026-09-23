"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function SuccessStoriesGrid({ stories }) {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState("All");
  const [migration, setMigration] = useState("All");
  const [visible, setVisible] = useState(9);
  const industries = [
    "All",
    ...new Set(stories.map((story) => story.category)),
  ];
  const migrations = [
    "All",
    ...new Set(stories.map((story) => story.migratedFrom).filter(Boolean)),
  ];
  const filtered = useMemo(
    () =>
      stories.filter(
        (story) =>
          (industry === "All" || story.category === industry) &&
          (migration === "All" || story.migratedFrom === migration) &&
          story.title.toLowerCase().includes(query.toLowerCase()),
      ),
    [industry, migration, query, stories],
  );
  const reset = () => setVisible(9);
  return (
    <section id="stories" className="bg-white py-16 max-md:py-10">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[285px_1fr] gap-12 px-6 max-md:grid-cols-1">
        <aside>
          {/* <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              reset();
            }}
            placeholder="Search stories"
            className="h-12 w-full rounded border border-[#d8d3d0] px-4 text-sm outline-none focus:border-[#8b43fd]"
          /> */}
          <p className="mt-5 border-b border-[#ddd] pb-4 mb-5 text-[10px] font-semibold uppercase tracking-[.2em] text-[#8b43fd]">
            Filter
          </p>
          {/* <label className="mt-5 flex items-center justify-between text-xs text-[#666]">
            Industry <span>⌄</span>
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {industries.slice(1).map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => {
                  setIndustry(industry === item ? "All" : item);
                  reset();
                }}
                className={`rounded-full border px-3 py-1.5 text-xs ${industry === item ? "border-[#8b43fd] bg-[#f3eaff] text-[#7138e8]" : "border-[#ddd] text-[#777]"}`}
              >
                {item}
              </button>
            ))}
          </div> */}
          <label className="text-xs text-[#666]">Migrated From</label>
          <div className="mt-3 flex flex-wrap gap-2">
            {migrations.slice(1).map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => {
                  setMigration(migration === item ? "All" : item);
                  reset();
                }}
                className={`rounded-full border px-3 py-1.5 text-xs ${migration === item ? "border-[#8b43fd] bg-[#f3eaff] text-[#7138e8]" : "border-[#ddd] text-[#777]"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </aside>
        <div>
          <div className="grid grid-cols-3 gap-x-7 gap-y-10 max-md:grid-cols-2 max-sm:grid-cols-1">
            {filtered.slice(0, visible).map((story) => (
              <article key={story.title}>
                <Link href={`/success-stories/${story.slug}`} className="group block">
                  <img
                    src={story.image}
                    alt=""
                    className="aspect-[1.62] w-full rounded object-cover transition-transform group-hover:scale-[1.02]"
                  />
                  <h2 className="mt-4 line-clamp-2 text-[16px] leading-[1.35] font-semibold group-hover:text-[#7138e8]">
                    {story.title}
                  </h2>
                </Link>
              </article>
            ))}
          </div>
          {visible < filtered.length && (
            <button
              type="button"
              onClick={() => setVisible((count) => count + 9)}
              className="mx-auto mt-12 block rounded bg-black px-7 py-3 text-xs font-semibold text-white"
            >
              View more
            </button>
          )}
          {filtered.length === 0 && (
            <p className="py-16 text-center text-sm text-[#666]">
              No stories found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
