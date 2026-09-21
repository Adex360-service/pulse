"use client";

import { useRef, useState } from "react";
import Container from "../ui/Container";
import BlogPostCard from "./BlogPostCard";
import { merchantCategories } from "../../content/blog";

export default function BlogMerchantStories() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);

  function handleKeyDown(event, index) {
    const count = merchantCategories.length;
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % count;
    else if (event.key === "ArrowLeft") next = (index - 1 + count) % count;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = count - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section className="bg-[#f7f7fc] py-12 max-sm:py-10" aria-labelledby="merchant-stories-title">
      <Container>
        <h2 id="merchant-stories-title" className="text-center font-[family-name:var(--font-fraunces)] text-[32px] leading-[1.2] font-semibold tracking-[-.5px] max-sm:text-[28px]">Merchant success stories from Loop</h2>
        <div className="mt-6 mb-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Merchant story categories">
          {merchantCategories.map((category, index) => (
            <button
              key={category.id}
              ref={element => { tabs.current[index] = element; }}
              id={`merchant-tab-${category.id}`}
              role="tab"
              aria-selected={active === index}
              aria-controls={`merchant-panel-${category.id}`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={event => handleKeyDown(event, index)}
              className={`rounded-full border px-6 py-2 text-sm leading-5 transition-colors max-sm:px-4 ${active === index ? "border-[#7138ff] bg-[#7138ff] text-white" : "border-[#d2cfce] text-[#363432] hover:border-[#7138ff] hover:text-[#7138ff]"}`}
            >{category.label}</button>
          ))}
        </div>
        {merchantCategories.map((category, index) => (
          <div key={category.id} id={`merchant-panel-${category.id}`} role="tabpanel" aria-labelledby={`merchant-tab-${category.id}`} hidden={active !== index} tabIndex={0}>
            <div className="mx-auto grid max-w-[1120px] grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-8">
              {category.posts.map(post => <BlogPostCard post={post} story key={post.slug} />)}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
