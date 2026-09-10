import LiquidButtonLayers from "../ui/LiquidButtonLayers";
import Link from "next/link";

export default function ConsultationButton({ className = "" }) {
  return (
    <Link href="#migration-contact" className={`loop-liquid-button inline-flex min-h-[64px] items-center justify-center gap-3 rounded-full bg-[linear-gradient(100deg,#9138ff,#2767ee)] px-8 text-[17px] font-semibold text-white shadow-[0_12px_30px_#6d35dc35] ${className}`}>
      <svg aria-hidden="true" className="h-[26px] w-[26px] shrink-0" viewBox="0 0 26 26" fill="none">
        <path d="M18.15 3.86V2.17a.81.81 0 0 0-1.63 0v1.62H9.48V2.17a.81.81 0 0 0-1.63 0v1.69c-2.92.27-4.34 2.01-4.56 4.6-.02.31.24.57.55.57h18.32c.32 0 .58-.27.55-.57-.22-2.59-1.64-4.33-4.56-4.6Z" fill="currentColor" />
        <path d="M21.67 10.66H4.33c-.6 0-1.08.49-1.08 1.08v6.68c0 3.25 1.63 5.41 5.42 5.41h5.34c.75 0 1.27-.72 1.03-1.43-.22-.63-.4-1.32-.4-1.82a5.96 5.96 0 0 1 7.89-5.88c.65.1 1.23-.41 1.23-1.06v-1.89c-.01-.6-.5-1.09-1.09-1.09Z" fill="currentColor" />
        <path d="M23.65 17.52a4.33 4.33 0 1 0-6.13 6.13 4.33 4.33 0 0 0 6.13-6.13Zm-1.4 3.91h-.8v.84a.81.81 0 0 1-1.63 0v-.84h-.81a.81.81 0 0 1 0-1.63h.81v-.77a.81.81 0 0 1 1.63 0v.77h.8a.81.81 0 0 1 0 1.63Z" fill="currentColor" />
      </svg>
      Book consultation call
      <LiquidButtonLayers />
    </Link>
  );
}
