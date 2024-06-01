import Link from "next/link";
import HeroLink from "./HeroLink";
import AnimatedText from "./Hero/AnimateText";
import dynamic from "next/dynamic";

const DynamicImage = dynamic(() => import("./HeroImage"));

export default function HeroHome() {
  return (
    <section className="bg-white dark:bg-slate-900 lg:flex ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:text-right text-center lg:py-16 lg:w-1/2">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-snug  md:text-5xl lg:text-6xl ">
          Hi, I&apos;m <span className="text-indigo-700">Muzammil Loya</span>.
          <br />
          Software Engineer
        </h1>
        <h2 className="mb-8 font-bold text-lg  text-slate-500 lg:text-xl   dark:text-slate-400">
          <AnimatedText
            text="Executive Director of Web Devlopment @ GDSC"
            duration={2}
          />
          <br /> <AnimatedText text="Freelancer" duration={1} delay={2} />{" "}
          <br /> <AnimatedText text="IoBM '26" duration={1} delay={3} />
        </h2>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center lg:justify-end sm:space-y-0">
          <HeroLink />
          <Link
            rel="canonical"
            href="/about"
            className="secondary-btn"
            aria-label="to about page button"
          >
            About me
          </Link>
        </div>
      </div>
      <DynamicImage />
    </section>
  );
}
