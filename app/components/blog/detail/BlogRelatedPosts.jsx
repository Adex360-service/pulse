"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Container from "../../ui/Container";
import BlogImage from "../BlogImage";
import relatedCategories from "../../../content/blogRelated.json";

export default function BlogRelatedPosts({ currentSlug }) {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const tabs = useRef([]);
  const category = relatedCategories[categoryIndex];
  const posts = category.posts.filter(post => post.slug !== currentSlug);
  const selectCategory = (index) => { setCategoryIndex(index); setOffset(0); };

  function handleKey(event, index) {
    const count = relatedCategories.length;
    const next = event.key === "ArrowRight" ? (index + 1) % count : event.key === "ArrowLeft" ? (index - 1 + count) % count : event.key === "Home" ? 0 : event.key === "End" ? count - 1 : null;
    if (next === null) return;
    event.preventDefault();
    selectCategory(next);
    tabs.current[next]?.focus();
  }

  return (
    <section className="bg-[#f7f7fc] py-12" aria-labelledby="related-posts-title">
      <Container className="max-w-[1120px]">
        <h2 id="related-posts-title" className="text-center font-[family-name:var(--font-fraunces)] text-[30px] font-semibold">You might also like...</h2>
        <div className="mt-5 mb-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Related blog categories">
          {relatedCategories.map((item, index) => (
            <button key={item.id} ref={element => { tabs.current[index] = element; }} id={`related-tab-${item.id}`} role="tab" aria-selected={categoryIndex === index} aria-controls={`related-panel-${item.id}`} tabIndex={categoryIndex === index ? 0 : -1} onClick={() => selectCategory(index)} onKeyDown={event => handleKey(event, index)} className={`rounded-full border px-5 py-1.5 text-xs transition-colors ${categoryIndex === index ? "border-[#8241ff] bg-[#8241ff] text-white" : "border-[#d7d1de] bg-transparent text-[#61596b] hover:border-[#8241ff]"}`}>{item.label}</button>
          ))}
        </div>
        {relatedCategories.map((item, index) => (
          <div id={`related-panel-${item.id}`} key={item.id} role="tabpanel" aria-labelledby={`related-tab-${item.id}`} hidden={categoryIndex !== index} tabIndex={0}>
            {categoryIndex === index && <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
              {posts.slice(offset, offset + 3).map(post => (
                <article key={post.slug}>
                  <Link href={post.href} className="group block">
                    <BlogImage src={post.image} />
                    <h3 className="mt-3 text-sm leading-[1.4] font-semibold group-hover:text-[#8241ff]">{post.title}</h3>
                  </Link>
                  <p className="mt-2 text-xs text-[#7c747f]">{post.readTime}</p>
                </article>
              ))}
            </div>}
          </div>
        ))}
        <div className="mt-7 flex items-center justify-center gap-4">
          <button type="button" aria-label="Previous related posts" disabled={offset === 0} onClick={() => setOffset(Math.max(0, offset - 3))} className="grid h-9 w-9 place-items-center rounded-full border border-[#d7d1de] bg-white text-[#8241ff] disabled:cursor-default disabled:opacity-35">←</button>
          <span className="text-xs text-[#7c747f]" role="status">{Math.min(offset + 1, posts.length)}–{Math.min(offset + 3, posts.length)} of {posts.length}</span>
          <button type="button" aria-label="Next related posts" disabled={offset + 3 >= posts.length} onClick={() => setOffset(Math.min(posts.length - 3, offset + 3))} className="grid h-9 w-9 place-items-center rounded-full border border-[#d7d1de] bg-white text-[#8241ff] disabled:cursor-default disabled:opacity-35">→</button>
        </div>
      </Container>
    </section>
  );
}
