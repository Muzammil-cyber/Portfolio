"use client";
import { motion } from "motion/react";
import { ProjectType } from "@/type/types";
import { PiGlobe } from "react-icons/pi";
import Link from "next/link";

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
      viewport={{ once: true }}
      className="w-full max-w-lg space-y-2 rounded-lg bg-secondary-100 p-4 text-left dark:bg-secondary-800"
    >
      <h3 className="text-3xl font-extrabold">{title}</h3>
      <p className="text-lg">{desc}</p>
      <div className="flex items-center justify-between">
        <div className="flex max-w-[12rem] flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-xl border-2 border-primary-800 px-2 text-xs uppercase text-primary-800 dark:border-primary-500 dark:text-primary-500"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          <Link
            href={gitUrl}
            target="_blank"
            rel="external"
            className="secondary-icon-btn"
            aria-label={`Source Code for ${title}`}
          >
            Source Code
            {/* <PiGithubLogoFill className="text-2xl" /> */}
          </Link>
          {webUrl && (
            <Link
              href={webUrl}
              target="_blank"
              rel="external"
              className="secondary-icon-btn"
              aria-label={`Visit Website for ${title}`}
            >
              <PiGlobe className="text-2xl" />
              Vist Website
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
