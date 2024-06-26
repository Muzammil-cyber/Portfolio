import { BASE_URL } from "@/utils/defualts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Engineer | Muzammil Loya's Projects",
  description:
    "Check out my software engineering portfolio showcasing projects like an NFT marketplace built with Next.js and MongoDB, a dog dating app, and more! I use technologies like HTML, CSS, JavaScript, VBscript, React native, and Node.js.",
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
    "VBscript",
  ],
  openGraph: {
    title: "Software Engineer | Muzammil Loya's Projects",
    description:
      "Check out my software engineering portfolio showcasing projects like an NFT marketplace built with Next.js and MongoDB, a dog dating app, and more! I use technologies like HTML, CSS, JavaScript, VBscript, React native, and Node.js.",
    url: BASE_URL + "/projects",
    type: "profile",
    siteName: "Muzammil Loya's Portfolio",
    locale: "en_US",
    images: [
      {
        url: BASE_URL + "/profile-Cropped.jpg",
        width: 800,
        height: 600,
        alt: "Muzammil Loya's Portfolio",
      },
    ],
    firstName: "Muzammil",
    lastName: "Loya",
    username: "Muzammil-cyber",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MuzammilLoya",
    title: "Software Engineer | Muzammil Loya's Projects",
    description:
      "Check out my software engineering portfolio showcasing projects like an NFT marketplace built with Next.js and MongoDB, a dog dating app, and more! I use technologies like HTML, CSS, JavaScript, VBscript, React native, and Node.js.",
    images: [BASE_URL + "/profile-Cropped.jpg"],
  },
};

export default function Layout({ children }) {
  return (
    <div className="w-full  h-fit dark:bg-secondary-900 dark:text-white">
      <main className="w-full max-w-6xl py-6 px-4 text-center mx-auto ">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-base mb-8">Everthing that I have build 🛠</p>
        {children}
      </main>
    </div>
  );
}
