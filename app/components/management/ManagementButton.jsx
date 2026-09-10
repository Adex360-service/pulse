import Link from "next/link";
export default function ManagementButton({
  children = "Get expert advice",
  href = "/book-a-demo",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-[#7928dc] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#5d18bd] ${className}`}
    >
      {children}
    </Link>
  );
}
