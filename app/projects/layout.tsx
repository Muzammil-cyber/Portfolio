import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Developer | Muzammil Loya's Projects",
  description:
    "Check out my web development portfolio showcasing projects like an NFT marketplace built with Next.js and MongoDB, a dog dating app, and more! I use technologies like HTML, CSS, JavaScript, VBscript, and Node.js.",
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
  ],
};

export default function Layout({ children }) {
  return (
    <div className="w-full  h-fit dark:bg-slate-900 dark:text-white">
      <main className="w-full max-w-6xl py-6 px-4 text-center mx-auto ">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-base mb-8">Everthing that I have build 🛠</p>
        {children}
        <Link
          href="https://github.com/Muzammil-cyber?tab=repositories"
          rel="external"
          target="_blank"
          className="secondary-btn my-8 mx-4 font-bold uppercase"
        >
          More Projects
        </Link>
      </main>
    </div>
  );
}
