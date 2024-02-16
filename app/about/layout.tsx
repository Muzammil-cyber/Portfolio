import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Unlock the future of web development with a web developer experienced in JavaScript, HTML, CSS, and Nodejs. Explore the possibilities of Motoko language for Web3 applications and harness the power of frameworks like NextJS and Chakra UI.",
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
      {children}
    </div>
  );
}
