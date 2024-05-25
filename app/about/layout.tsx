import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Engineer 🚀 | Muzammil Loya's Skills & Experience",
  description:
    "Hi, I'm Muzammil, a 20-year-old software Enginner skilled in HTML, CSS, JavaScript, React, Node.js, and more. Let's connect!",
  keywords: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Express.js",
    "Next.js",
    "Tailwind CSS",
    "Web3",
    "Motoko",
    "freelance",
    "web developer",
    "skills",
    "experience",
    "react native",
    "node.js",
    "full stack",
    "software engineer",
    "software developer",
    "mobile developer",
  ],
  openGraph: {
    title: "Software Engineer 🚀 | Muzammil Loya's Skills & Experience",
    description:
      "Hi, I'm Muzammil, a 20-year-old software Enginner skilled in HTML, CSS, JavaScript, React, Node.js, and more. Let's connect!",
    url: "https://muzammil-loya.vercel.app/about",
    type: "website",
    siteName: "Muzammil Loya's Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://muzammil-loya.vercel.app/profile-Cropped.jpg",
        width: 800,
        height: 600,
        alt: "Muzammil Loya's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MuzammilLoya",
    title: "Software Engineer 🚀 | Muzammil Loya's Skills & Experience",
    description:
      "Hi, I'm Muzammil, a 20-year-old software Enginner skilled in HTML, CSS, JavaScript, React, Node.js, and more. Let's connect!",
    images: ["https://muzammil-loya.vercel.app/profile-Cropped.jpg"],
  },
};

export default function Layout({ children }) {
  return (
    <div className="w-full  h-fit dark:bg-slate-900 dark:text-white">
      {children}
    </div>
  );
}
