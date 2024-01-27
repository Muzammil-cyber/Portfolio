import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

import { GoogleAnalytics } from "@next/third-parties/google";
import DarkMode from "@/context/DarkMode";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Muzammil",
    default: "Muzammil Loya", // a default is required when creating a template
  },

  description:
    "Muzammil Loya's Portfolio. As a web developer, I have extensive knowledge and skills in my domain. I have worked on several projects using JavaScript, Typescript, HTML, CSS and Nodejs, and I can demonstrate my proficiency in these technologies. I am also familiar with various frameworks such as reactjs, nextjs, bootstrap, material ui, chakra ui and others, and I can use them to create responsive and user-friendly web applications. Moreover, I have some familiarity with Motoko language, which is used for developing Web3 web applications. I have learned the basics of this language and I am interested in exploring its potential for the future of web development.",
  keywords: [
    "Web Developer",
    "Full stack Developer",
    "Developer for hire",

    "responsive and user-friendly web app",
    "blog",
    "blogger",
  ],
  verification: { google: "zlT0pnlw_0XvL7gPOhY1rwmoUUDMQOKcbqyhVRNcEBc" },
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
      </DarkMode>
      <GoogleAnalytics gaId="G-7DMPFKPXZH" />
      {/* </body> */}
    </html>
  );
}
