import { ExpType } from "@/type/types";
import { FaCalendar } from "react-icons/fa";
import { Exp } from "./data";

function Experience({ title, date, company, location, ifLatest }: ExpType) {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">
        <FaCalendar className="h-2.5 w-2.5 text-primary-800 dark:text-primary-300" />
      </span>
      <h4 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
        {title}{" "}
        {(ifLatest || date.includes("Present")) && (
          <span className="me-2 ms-3 rounded bg-primary-100 px-2.5 py-0.5 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            Latest
          </span>
        )}
      </h4>
      <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
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
    <article className="text-left sm:w-1/2">
      <h3 className="mb-3 text-3xl font-bold">Experience</h3>
      <p className="mb-2 font-medium">
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
