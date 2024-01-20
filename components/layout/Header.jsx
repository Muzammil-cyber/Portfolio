"use client";

import dynamic from "next/dynamic";
// import ThemeToggler from "../theme/ThemeToggler";
// import Logo from "./logo";

const LogoDynamic = dynamic(() => import("./logo"), {
  ssr: false,
});
const ThemeDynamic = dynamic(() => import("../theme/ThemeToggler"), {
  ssr: false,
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
  function handleClick() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("hidden");
  }

  return (
    <header className="bg-slate-100 dark:bg-slate-800 flex justify-between  px-4 py-1 sm:py-3 items-center flex-1">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <LogoDynamic />
      </div>
      <nav className="flex p-0 sm:mr-16">
        {links.map((key, index) => (
          <a
            key={index}
            href={key.link}
            className="block px-2 py-1 text-gray-500 dark:text-white font-semibold rounded hover:text-indigo-500 dark:hover:text-indigo-500"
          >
            {key.name}
          </a>
        ))}
      </nav>
      <ThemeDynamic />
    </header>
  );
}
