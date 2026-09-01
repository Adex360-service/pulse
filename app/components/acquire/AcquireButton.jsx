import Link from "next/link";

export default function AcquireButton({ children, href = "/book-a-demo", outline = false }) {
  return (
    <Link
      href={href}
      className={outline
        ? "inline-flex min-h-14 items-center justify-center rounded-full border border-[#32146d] px-10 text-base font-semibold text-[#32146d] transition hover:bg-[#32146d] hover:text-white"
        : "inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#8d2cff] to-[#5e2adb] px-12 text-base font-semibold text-white shadow-[0_12px_30px_#7935d52b] transition hover:-translate-y-0.5"}
    >
      {children}
    </Link>
  );
}
