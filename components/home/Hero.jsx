import Image from "next/image";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

export default function HeroHome() {
  return (
    <section className="bg-white dark:bg-slate-900 lg:flex ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:text-right text-center lg:py-16 lg:w-1/2">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-snug text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
          Hi, I&apos;m <span className="text-indigo-700">Muzammil Loya</span>.
          <br />
          Web Developer
        </h1>
        <h2 className="mb-8 font-bold text-lg  text-slate-500 lg:text-xl   dark:text-slate-400">
          Executive Director of Web Devlopment @ GDSC <br /> Freelancer <br />{" "}
          IoBM &apos;26
        </h2>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center lg:justify-end sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center gap-2 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900"
          >
            <FaFilePdf /> Download CV
          </a>
          <Link
            href="/about"
            className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-slate-900 rounded-lg border border-slate-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            About me
          </Link>
        </div>
      </div>
      <div className="lg:flex hidden w-1/2  items-center justify-center">
        <Image
          src={"/profile-removebg.png"}
          alt="Muzammil's profile picture"
          width={250}
          height={250}
          className="rounded-full w-64 h-auto absolute z-30"
        />{" "}
        <div className="w-64 h-80 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-700  absolute z-0"></div>
      </div>
    </section>
  );
}
