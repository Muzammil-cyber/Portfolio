import { ImageType } from "@/type/types";
import Image from "next/image";
import Link from "next/link";
import age from "./intro/age";

export default function Intro({ img, base64 }: ImageType) {
  return (
    <section className="flex flex-col items-center gap-4 py-8 md:flex-row md:justify-center">
      <article className="mx-auto space-y-4 text-left text-lg sm:w-1/2">
        <h2 className="text-3xl font-bold">Hi, I&apos;m Muzammil Loya 👋</h2>{" "}
        <p className="text-secondary-800 dark:text-secondary-400">
          I&apos;m a {age()}-year-old{" "}
          <span className="text-bold">software engineer</span> with expertise in
          React Native, NextJS, and Node.js. I&apos;m passionate about building
          robust and scalable software solutions that enhance user experience.
        </p>
        <p className="text-secondary-600 dark:text-secondary-400">
          My software development journey began at the age of 19, and I&apos;ve
          since gained valuable experience working with diverse companies
          worldwide. 🌍
        </p>
        <p className="text-secondary-600 dark:text-secondary-400">
          Currently, I&apos;m seeking a challenging position to broaden my skill
          set and tackle new technical problems. I thrive in innovative
          environments and believe in collaborative problem-solving. &#x1F60E;
        </p>
        <p className="text-secondary-600 dark:text-secondary-400">
          Sounds interesting? Feel free to{" "}
          <Link
            rel="author"
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            className="link !text-lg"
            aria-label="Email Muzammil Loya"
          >
            contact me!&#x1F4EC;
          </Link>
        </p>
      </article>
      <Image
        className="image-back h-auto w-1/2 rounded-full max-md:mt-4"
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
