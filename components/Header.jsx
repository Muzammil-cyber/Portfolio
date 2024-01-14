'use client'
import Image from "next/image"
import ThemeToggler from "./theme/ThemeToggler";

export default function Header() {
  const links = [
    {
      name: "Home",
      link: "#Home",
    },
    {
      name: "Portfolio",
      link: "#Portfolio",
    },
    {
      name: "About",
      link: "#About",
    },
  ];
  function handleClick() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("hidden");
  }

  return (
    <header className="bg-slate-100 dark:bg-slate-800 flex justify-between px-4 py-3 items-center flex-1">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Image
            className="h-8 w-auto"
            src="/logo.svg"
            alt="Workflow"
            width={100}
            height={100}
          />
        </div>
      </div>
      <nav className="flex p-0">
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