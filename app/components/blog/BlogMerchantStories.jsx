"use client";

import { useRef, useState } from "react";
import Container from "../ui/Container";
import BlogPostCard from "./BlogPostCard";

export default function BlogMerchantStories({ posts = [], categories = [] }) {
  const [active, setActive] = useState(0);
  const [storyOffset, setStoryOffset] = useState(0);
  const tabs = useRef([]);

  if (!categories.length) return null;

  function handleKeyDown(event, index) {
    const count = categories.length;
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % count;
    else if (event.key === "ArrowLeft") next = (index - 1 + count) % count;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = count - 1;
    else return;
    event.preventDefault();
    setActive(next);
    setStoryOffset(0);
    tabs.current[next]?.focus();
  }

  return (
    <section className="bg-[#f7f7fc] py-12 max-sm:py-10" aria-labelledby="merchant-stories-title">
      <Container>
        <h2 id="merchant-stories-title" className="text-center font-[family-name:var(--font-fraunces)] text-[32px] leading-[1.2] font-semibold tracking-[-.5px] max-sm:text-[28px]">Merchant success stories from Loop</h2>
        <div className="mt-6 mb-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Merchant story categories">
          {categories.map((category, index) => (
            <button
              key={category.id}
              ref={element => { tabs.current[index] = element; }}
              id={`merchant-tab-${category.id}`}
              role="tab"
              aria-selected={active === index}
              aria-controls={`merchant-panel-${category.id}`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => {
                setActive(index);
                setStoryOffset(0);
              }}
              onKeyDown={event => handleKeyDown(event, index)}
              className={`rounded-full border px-6 py-2 text-sm leading-5 transition-colors max-sm:px-4 ${active === index ? "border-[#7138ff] bg-[#7138ff] text-white" : "border-[#d2cfce] text-[#363432] hover:border-[#7138ff] hover:text-[#7138ff]"}`}
            >{category.label}</button>
          ))}
        </div>
        {categories.map((category, index) => (
          <div key={category.id} id={`merchant-panel-${category.id}`} role="tabpanel" aria-labelledby={`merchant-tab-${category.id}`} hidden={active !== index} tabIndex={0}>
            {(() => {
              const categoryPosts = posts.filter((post) => post.category === category.label);
              const maxOffset = Math.max(0, categoryPosts.length - 3);
              const visiblePosts = categoryPosts.slice(storyOffset, storyOffset + 3);

              return (
                <>
                  <div className="mx-auto grid max-w-[1120px] grid-cols-3 gap-5">
                    {visiblePosts.map((post) => (
                      <BlogPostCard post={post} story key={post.slug} />
                    ))}
                  </div>
                  {categoryPosts.length > 3 && (
                    <div className="mt-6 flex justify-end gap-2">
                      <button
                        type="button"
                        aria-label="Show previous stories"
                        onClick={() => setStoryOffset((offset) => Math.max(0, offset - 1))}
                        disabled={storyOffset === 0}
                        className="grid size-10 place-items-center rounded-full border border-[#d2cfce] text-xl transition-colors hover:border-[#7138e8] hover:text-[#7138e8] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        aria-label="Show more stories"
                        onClick={() => setStoryOffset((offset) => Math.min(maxOffset, offset + 1))}
                        disabled={storyOffset >= maxOffset}
                        className="grid size-10 place-items-center rounded-full border border-[#d2cfce] text-xl transition-colors hover:border-[#7138e8] hover:text-[#7138e8] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        →
                      </button>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        ))}
      </Container>
    </section>
  );
}
