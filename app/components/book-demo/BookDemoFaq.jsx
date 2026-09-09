"use client";

import { useState } from "react";
import Container from "../ui/Container";

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="border-t border-[#e5e2e4] last:border-b">
      <button type="button" className="flex w-full items-center justify-between gap-5 py-5 text-left font-semibold text-[#36206f]" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>{question}</span><span className={`text-2xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="pb-5 leading-7 text-[#686366]">{answer}</p></div></div>
    </article>
  );
}

export default function BookDemoFaq({ faqs }) {
  const columns = [faqs.slice(0, 3), faqs.slice(3)];
  return (
    <section className="bg-white py-24 max-sm:py-16">
      <Container>
        <p className="mb-5 text-sm font-semibold tracking-wide text-[#873cff]">FAQ</p>
        <h2 className="font-[family-name:var(--font-display)] text-[52px] leading-tight text-[#3a2078] max-sm:text-[38px]">Frequently Asked Questions (FAQs)</h2>
        <div className="mt-10 grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-0">
          {columns.map((column, index) => <div key={index}>{column.map(([question, answer]) => <FaqItem key={question} question={question} answer={answer} />)}</div>)}
        </div>
      </Container>
    </section>
  );
}
