import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { GoogleTagManager } from "@next/third-parties/google";
import DarkMode from "@/context/DarkMode";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Software Engineer | Muzammil Loya's Portfolio",

  description:
    "I'm Muzammil Loya, a software engineer passionate about clean code & UX. Check out my portfolio and recent blog posts on recent techs!",
  keywords: [
    "Web Developer",
    "Full stack Developer",
    "Developer for hire",
    "User-Friendly Web Applications",
    "Responsive Web Design",
    "Decentralized Web",
    "blog",
    "blogger",
    "tech blog",
    "software engineer",
    "software developer",
    "mobile developer",
    "react native developer",
    "react developer",
    "nextjs developer",
    "node developer",
  ],
  authors: [{ name: "Muzammil Loya" }],
  creator: "Muzammil Loya",
  publisher: "Muzammil Loya",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#4438ca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" h-screen bg-in">
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
