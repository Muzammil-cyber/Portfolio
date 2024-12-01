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
    <div className="h-8 w-8 animate-pulse rounded-full bg-secondary-500 dark:bg-secondary-200"></div>
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
    <header className="flex flex-1 items-center justify-between bg-secondary-100 px-4 py-1 dark:bg-secondary-800 sm:py-3">
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
            className={`block px-2 py-1 ${active == key.link ? "text-primary-500 dark:text-primary-500" : "text-gray-500 dark:text-white"} rounded font-semibold hover:text-primary-500 dark:hover:text-primary-500`}
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
