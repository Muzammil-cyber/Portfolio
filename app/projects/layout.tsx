import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Works done by Muzammil Loya",
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
      </main>
    </div>
  );
}
