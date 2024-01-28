import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

import { GoogleTagManager } from "@next/third-parties/google";
import DarkMode from "@/context/DarkMode";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Muzammil",
    default: "Muzammil Loya", // a default is required when creating a template
  },

  description:
    "I'm Muzammil Loya, a web developer with a passion for weaving code into vibrant, user-centric experiences. My toolbox overflows with the building blocks of the modern web: JavaScript, TypeScript, HTML, CSS, and Node.js. These aren't just tools; they're instruments I use to orchestrate symphonies of functionality and beauty.But frameworks? I don't just dabble - I dive deep. ReactJS, NextJS, Bootstrap, Material UI, Chakra UI? Name it, I've tamed it. These frameworks are my companions in crafting responsive, intuitive web applications that seamlessly adapt to any screen size or device.The future of the web excites me, and that's why I'm peering into the world of Web3 and the Motoko language. I've grasped its essentials, and I'm eager to explore its potential for decentralizing the web and building experiences driven by community and ownership.My portfolio isn't just a showcase of my skills; it's a testament to my dedication to pushing the boundaries of web development. Each project is a pixel-perfect canvas where I paint interactive stories, solve real-world problems, and leave users with a touch of digital magic.So, whether you're looking for a skilled developer to bring your web vision to life, or simply curious about the latest trends in web3, come explore my digital canvas. You might just discover that I'm not just weaving code, I'm weaving the future of the web, one pixel at a time.",
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
      <GoogleTagManager gtmId="G-7DMPFKPXZH" />
      {/* </body> */}
    </html>
  );
}
