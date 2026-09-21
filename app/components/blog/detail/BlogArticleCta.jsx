import Link from "next/link";

export default function BlogArticleCta({ title, description, eyebrow, label, href, compact = false }) {
  if (compact) {
    return (
      <Link href={href} className="my-7 flex items-center justify-between gap-5 bg-gradient-to-r from-[#412177] to-[#9860ed] px-6 py-5 text-white max-sm:flex-col max-sm:items-start">
        <span><strong className="block font-[family-name:var(--font-fraunces)] text-xl font-semibold">{title}</strong><span className="mt-1 block text-xs leading-[1.6] text-white/85">{description}</span></span>
        <span className="shrink-0 text-sm font-semibold">{label} <span aria-hidden="true">→</span></span>
      </Link>
    );
  }
  return (
    <aside className="my-8 bg-[#402079] px-9 py-12 text-center text-white max-sm:px-5">
      <p className="mb-4 text-xs uppercase tracking-[2px] text-[#c8a1ff]">{eyebrow}</p>
      <h3 className="mx-auto max-w-[620px] font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.2] font-normal">{title}</h3>
      <Link href={href} className="mt-6 inline-flex items-center gap-2 rounded-sm bg-white px-5 py-3 text-sm font-semibold text-[#8b43fd]">{label}<span aria-hidden="true">→</span></Link>
    </aside>
  );
}
