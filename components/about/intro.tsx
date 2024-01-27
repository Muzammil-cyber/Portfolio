import { ImageType } from "@/type/types";
import Image from "next/image";
import Link from "next/link";

export default function Intro({ img, base64 }: ImageType) {
  return (
    <section className="flex flex-col md:flex-row md:justify-center items-center gap-4 py-8">
      <article className="sm:w-1/2 text-left space-y-4  text-lg mx-auto">
        <h2 className="text-3xl font-bold ">Hi, I&apos;m Muzammil Loya 👋</h2>{" "}
        <p className="text-slate-800 dark:text-slate-400">
          I&apos;m a 19 year old{" "}
          <span className="font-bold text-inherit">Web developer</span> based in
          Pakistan. I&apos;m passionate about building modern web apps that
          helps others (including me) to improve their lives. I started my web
          development adventure at the age of 18 and now I work for varoius
          companies around the world. &#x1F30D;
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          I&apos;m working as a freelancer, so if you want to hire me, check the
          section below. Currently, I&apos;m looking for a job to enhance my
          skills and take on newer challanges. I&apos;m always open to
          innovative ideas and solutions, so I think we&apos;re gonna get along.
          &#x1F60E;
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          Sounds interesting? Feel free to{" "}
          <Link
            rel="author"
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            className="link !text-lg"
          >
            contact me!&#x1F4EC;
          </Link>
        </p>
      </article>
      <Image
        className="rounded-full sm:w-1/2 sm:h-auto h-[400px] w-[400px] image-back"
        src={img.src}
        alt="It's a me, Muzammil"
        width={img.width}
        height={img.height}
        placeholder="blur"
        blurDataURL={base64}
      />
    </section>
  );
}
