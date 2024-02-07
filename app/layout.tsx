import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { GoogleTagManager } from "@next/third-parties/google";
import DarkMode from "@/context/DarkMode";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Muzammil",
    default: "Muzammil Loya's Portfolio", // a default is required when creating a template
  },

  description:
    "Experienced in JavaScript, TypeScript, HTML, CSS, and Node.js. Creates responsive web apps using frameworks like  NextJS, TailwindCSS and more. Exploring Web3",
  keywords: [
    "Web Developer",
    "Full stack Developer",
    "Developer for hire",
    "User-Friendly Web Applications",
    "Responsive Web Design",
    "Decentralized Web",
    "blog",
    "blogger",
  ],

  verification: {
    google: "zlT0pnlw_0XvL7gPOhY1rwmoUUDMQOKcbqyhVRNcEBc",
    other: { "msvalidate.01": "AD439BD747F8237BDB277E0346A6C91B" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#4438ca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" h-screen bg-in">
      {/* <GTag /> */}
      {/* <body className={`flex-col h-screen`}> */}
      <DarkMode>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </DarkMode>
      <GoogleTagManager gtmId={process.env.GTM} />
      {/* </body> */}
    </html>
  );
}
