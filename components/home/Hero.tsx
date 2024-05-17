import { ImageType } from "@/type/types";
import Image from "next/image";
import Link from "next/link";
import me from "../../public/profile-removebg.png";
import HeroLink from "./HeroLink";
import AnimatedText from "./Hero/AnimateText";

export default function HeroHome() {
  // { base64, img }: ImageType
  return (
    <section className="bg-white dark:bg-slate-900 lg:flex ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:text-right text-center lg:py-16 lg:w-1/2">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-snug  md:text-5xl lg:text-6xl ">
          Hi, I&apos;m <span className="text-indigo-700">Muzammil Loya</span>.
          <br />
          Software Engineer
        </h1>
        <h2 className="mb-8 font-bold text-lg  text-slate-500 lg:text-xl   dark:text-slate-400">
          Executive Director of Web Devlopment @ GDSC <br /> Freelancer <br />{" "}
          IoBM &apos;26
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
      <div className="lg:flex hidden w-1/2  items-center justify-center">
        <Image
          src={"/profile-removebg.png"}
          alt="Muzammil's profile picture without background"
          width={400}
          height={400}
          // width={img.width}
          // height={img.height}
          // blurDataURL={base64}
          // placeholder="blur"
          className="rounded-full w-64 h-auto absolute z-30"
        />
        <div className="w-64 h-80 rounded-full image-back absolute z-0"></div>
      </div>
    </section>
  );
}
