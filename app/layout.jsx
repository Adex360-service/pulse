import localFont from "next/font/local";
import "./globals.css";
const inter = localFont({
  src: [
    { path: "./fonts/inter-regular.ttf", weight: "400" },
    { path: "./fonts/inter-semibold.ttf", weight: "600" },
    { path: "./fonts/inter-bold.ttf", weight: "700" },
  ],
  variable: "--font-inter",
  display: "swap",
});
const dmSerif = localFont({
  src: "./fonts/dm-serif-display.ttf",
  variable: "--font-display",
  display: "swap",
});

const fraunces = localFont({
  src: [
    { path: "./fonts/Fraunces_72pt-Regular.ttf", weight: "400" },
    { path: "./fonts/Fraunces_72pt-SemiBold.ttf", weight: "600" },
    { path: "./fonts/Fraunces_72pt-Bold.ttf", weight: "700" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata = {
  title: "Loop Subscriptions — The subscription platform for Shopify",
  description:
    "Grow, retain, and manage subscribers with a platform built for ambitious Shopify brands.",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} ${fraunces.variable}`}
    >
      <body id="top">{children}</body>
    </html>
  );
}
