import Link from "next/link";
import LiquidButtonLayers from "../ui/LiquidButtonLayers";
export default function ManagementButton({
  children = "Get expert advice",
  href = "/book-a-demo",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`loop-liquid-button inline-flex items-center justify-center rounded-full bg-[#7928dc] px-8 py-3 text-sm font-semibold text-white ${className}`}
    >
      <span>{children}</span><LiquidButtonLayers />
    </Link>
  );
}
