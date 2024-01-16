"use client";
import Image from "next/image";
import ThemeToggler from "../theme/ThemeToggler";

export default function Header() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Portfolio",
      link: "/Portfolio",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  function handleClick() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("hidden");
  }

  return (
    <header className="bg-slate-100 dark:bg-slate-800 flex justify-between  px-4 py-1 sm:py-3 items-center flex-1">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Image
            className="h-8 w-auto max-sm:hidden hidden sm:dark:inline"
            src="/logo.svg"
            alt="Muzammil Loya's Portfolio logo"
            width={100}
            height={100}
          />
          <Image
            className="h-8 w-auto dark:hidden max-sm:hidden"
            src="/logo-dark.svg"
            alt="Muzammil Loya's Portfolio logo"
            width={100}
            height={100}
          />
          <Image
            className="h-8 w-auto sm:hidden min-w-[2rem]"
            src="/logo-short.png"
            alt="Muzammil Loya's Portfolio logo"
            width={50}
            height={50}
          />
        </div>
      </div>
      <nav className="flex p-0 mr-16">
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
      <ThemeToggler />
    </header>
  );
}
