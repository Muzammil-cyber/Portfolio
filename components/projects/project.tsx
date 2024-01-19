"use client";
import { motion } from "framer-motion";
import { ProjectType } from "@/type/types";
import { PiGlobe } from "react-icons/pi";

export default function Project({
  title,
  desc,
  tech,
  gitUrl,
  webUrl,
}: Omit<ProjectType, "id">) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.8 }}
      className="rounded-lg w-full max-w-lg bg-slate-100 dark:bg-slate-800 text-left p-4 space-y-2"
    >
      <h3 className="text-3xl font-extrabold">{title}</h3>
      <p className="text-lg">{desc}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 max-w-[12rem] flex-wrap">
          {tech.map((t) => (
            <span
              key={t}
              className="dark:text-indigo-500 text-indigo-800 text-xs border-2 border-indigo-800 dark:border-indigo-500 uppercase px-2 rounded-xl"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-icon-btn"
          >
            Source Code
            {/* <PiGithubLogoFill className="text-2xl" /> */}
          </a>
          {webUrl && (
            <a
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-icon-btn"
            >
              <PiGlobe className="text-2xl" />
              Vist Website
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
