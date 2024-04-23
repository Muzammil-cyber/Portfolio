"use client";


import LoadingTheme from "../theme/loading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggler from "../theme/ThemeToggler";
import { Suspense } from "react";
import Logo from "./logo";

export default function Header() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];
  const active = usePathname();

  return (
    <header className="bg-slate-100 dark:bg-slate-800 flex justify-between  px-4 py-1 sm:py-3 items-center flex-1">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <Suspense>
          <Logo />
        </Suspense>
      </div>
      <nav className="flex p-0 sm:mr-16">
        {links.map((key, index) => (
          <Link
            rel={`${active == key.link ? "canonical" : ""}`}
            key={index}
            href={key.link}
            className="block px-2 py-1 text-gray-500 dark:text-white font-semibold rounded hover:text-indigo-500 dark:hover:text-indigo-500"
          >
            {key.name}
          </Link>
        ))}
      </nav>
      <Suspense fallback={<LoadingTheme />}>
        <ThemeToggler />
      </Suspense>
    </header>
  );
}
