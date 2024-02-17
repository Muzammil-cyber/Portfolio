import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Developer 🚀 | Muzammil Loya's Skills & Experience",
  description:
    "Hi, I'm Muzammil, a 19-year-old web developer skilled in HTML, CSS, JavaScript, React, Node.js, and more. Let's connect!",
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
  ],
};

export default function Layout({ children }) {
  return (
    <div className="w-full  h-fit dark:bg-slate-900 dark:text-white">
      {children}
    </div>
  );
}
