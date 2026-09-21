"use client";

import { useId, useRef, useState } from "react";
import { useBlogSearch } from "./BlogSearchProvider";
import BlogSearchResults from "./BlogSearchResults";

export default function BlogSearch({ label = "Search blogs", className = "" }) {
  const id = useId();
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { query, changeQuery, filteredPosts, suggestedPosts } = useBlogSearch();
  const showResults = open && Boolean(query.trim());
  const suggested = filteredPosts.length === 0;
  const posts = (suggested ? suggestedPosts : filteredPosts).slice(0, 3);

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      inputRef.current?.focus();
      setOpen(false);
      return;
    }
    if (!showResults || !["ArrowDown", "ArrowUp"].includes(event.key)) return;
    const links = Array.from(event.currentTarget.querySelectorAll("li a"));
    const current = links.indexOf(document.activeElement);
    const next = event.key === "ArrowDown" ? current + 1 : current - 1;
    event.preventDefault();
    if (next < 0 || next >= links.length) inputRef.current?.focus();
    else links[next]?.focus();
  }

  return (
    <div
      className={`relative ${className}`}
      role="search"
      aria-label={label}
      onKeyDown={handleKeyDown}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="relative">
        <label className="sr-only" htmlFor={id}>{label}</label>
        <svg className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-[#aaa]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="7.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="m16 16 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          id={id}
          type="search"
          autoComplete="off"
          value={query}
          aria-controls={showResults ? `${id}-results` : undefined}
          onFocus={() => setOpen(true)}
          onChange={event => {
            changeQuery(event.target.value);
            setOpen(true);
          }}
          placeholder="Search by keyword or topic..."
          className="h-12 w-full rounded-xl border border-[#d3d0ce] bg-white pr-12 pl-10 text-[15px] text-[#262522] outline-none placeholder:text-[#92908e] focus:border-[#7936e8] focus:ring-2 focus:ring-[#7936e8]/15 [&::-webkit-search-cancel-button]:appearance-none"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            className="absolute top-1/2 right-2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-[#30343b] hover:text-[#7138e8]"
            onClick={() => {
              changeQuery("");
              inputRef.current?.focus();
              setOpen(false);
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
              <path d="m9 9 6 6m0-6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
      {showResults && <BlogSearchResults id={`${id}-results`} posts={posts} suggested={suggested} onSelect={() => setOpen(false)} />}
    </div>
  );
}
