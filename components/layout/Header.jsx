"use client";


import LoadingTheme from "../theme/loading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggler from "../theme/ThemeToggler";
import { Suspense } from "react";
import Logo from "./logo";
import dynamic from "next/dynamic";

const DynamicLogo = dynamic(() => import("./logo"), {
  loading: () => (
    <div className="h-8 w-8 rounded-full animate-pulse bg-secondary-500 dark:bg-secondary-200"></div>
  ),
});

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
    <header className="bg-secondary-100 dark:bg-secondary-800 flex justify-between  px-4 py-1 sm:py-3 items-center flex-1">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        {/* <Suspense
          fallback={
            <div>
              <div className="h-8 w-8 rounded-full animate-pulse bg-secondary-500 dark:bg-secondary-200"></div>
            </div>
          }
        >
          <Logo />
        </Suspense> */}
        <DynamicLogo />
      </div>
      <nav className="flex p-0 sm:mr-16">
        {links.map((key, index) => (
          <Link
            rel={`${active == key.link ? "canonical" : ""}`}
            key={index}
            href={key.link}
            className="block px-2 py-1 text-gray-500 dark:text-white font-semibold rounded hover:text-primary-500 dark:hover:text-primary-500"
            aria-label={"Link to " + key.name}
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
