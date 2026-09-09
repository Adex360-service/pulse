"use client";
import { useEffect, useRef } from "react";
export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { node.classList.add("is-visible"); observer.disconnect(); } }, { threshold: .14 });
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`retention-reveal ${className}`}>{children}</div>;
}
