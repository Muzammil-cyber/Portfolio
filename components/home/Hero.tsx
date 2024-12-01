import Link from "next/link";
import HeroLink from "./HeroLink";
import AnimatedText from "./Hero/AnimateText";
import dynamic from "next/dynamic";

const DynamicImage = dynamic(() => import("./HeroImage"));

export default function HeroHome() {
  return (
    <section className="bg-white dark:bg-secondary-900 lg:flex">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:w-1/2 lg:py-16 lg:text-right">
        <h1 className="mb-4 text-4xl font-extrabold leading-snug tracking-tight md:text-5xl lg:text-6xl">
          Hi, I&apos;m <span className="text-primary-700">Muzammil Loya</span>.
          <br />
          <AnimatedText text="Software Engineer" duration={2} />
        </h1>
        <h2 className="mb-8 text-lg font-bold text-secondary-500 dark:text-secondary-400 lg:text-xl">
          <AnimatedText text="Web developer" duration={2} delay={3} />
          <br /> <AnimatedText text="App developer" duration={2} delay={3} />
          <br /> <AnimatedText text="IoBM '26" duration={2} delay={3} />
        </h2>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 lg:justify-end">
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
