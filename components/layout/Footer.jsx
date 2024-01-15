"use client";

import Link from "next/link";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

export default function Footer() {
  const links = [
    {
      icon: <LuLinkedin />,
      name: "LinkedIn",
      link: process.env.NEXT_PUBLIC_LINKEDIN,
    },
    {
      icon: <LuGithub />,
      name: "GitHub",
      link: process.env.NEXT_PUBLIC_GITHUB,
    },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 sm:flex sm:justify-between  sm:pt-3 sm:items-center flex-1 flex-col">
      <section className="flex w-full px-4 py-4 ">
        <div className="w-1/2">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Let&apos;s build something together
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
            Feel free to reach out if you&apos;re looking for a developer, have
            a question or just want to connect 📭
          </p>
          <Link
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            className="text-indigo-700 hover:text-indigo-800 dark:text-indigo-600 dark:hover:text-indigo-700 text-sm font-sans font-semibold hover:cursor-pointer"
          >
            <LuMail className="inline text-lg mr-1" />
            {process.env.NEXT_PUBLIC_EMAIL}
          </Link>
        </div>
        <nav className="px-2 pt-2 pb-4 flex flex-col sm:flex-row  sm:p-0 w-1/2 justify-center sm:justify-end items-end">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="text-xl px-2 py-1 text-gray-700 dark:text-white font-semibold rounded hover:text-indigo-800 dark:hover:text-indigo-500"
            >
              {link.icon}
            </Link>
          ))}
        </nav>
      </section>

      <p className="text-gray-500 dark:text-gray-400 text-xs w-full border-t-[1px] dark:border-t-slate-600 text-center py-3">
        &copy; {new Date().getFullYear()} Muzammil Loya. All rights reserved
      </p>
    </footer>
  );
}
