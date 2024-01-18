import { ExpType } from "@/type/types";
import { FaCalendar } from "react-icons/fa";
import { Exp } from "./data";

function Experience({ title, date, company, location, ifLatest }: ExpType) {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-indigo-900">
        <FaCalendar className="w-2.5 h-2.5 text-indigo-800 dark:text-indigo-300" />
      </span>
      <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {title}{" "}
        {ifLatest && (
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 ms-3">
            Latest
          </span>
        )}
      </h4>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {company} &#x26AC; {location}
      </p>
    </li>
  );
}

export default function Experiences() {
  return (
    <article className="sm:w-1/2 text-left">
      <h3 className="text-3xl font-bold mb-3">Experience</h3>
      <p className="font-medium mb-2">
        All the places I&apos;ve worked at so far 💼
      </p>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {Exp.map((e) => (
          <Experience key={e.id} {...e} />
        ))}
      </ol>
    </article>
  );
}
