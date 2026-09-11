"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isHelpCenter = pathname.startsWith("/help-center") || pathname.startsWith("/articles/");

  return (
    <>
      {!isHelpCenter && <Header />}
      {children}
      {!isHelpCenter && <Footer />}
    </>
  );
}
