import { ImageType } from "@/type/types";
import Image from "next/image";
import Link from "next/link";
import IntroClient from "./intro-client";

export default function Intro({ img, base64 }: ImageType) {
  return (
    <section className="flex flex-col items-center gap-4 py-8 md:flex-row md:justify-center">
      <article className="mx-auto space-y-4 text-left text-lg sm:w-1/2">
        <h2 className="text-3xl font-bold">Hi, I&apos;m Muzammil Loya 👋</h2>{" "}
        <IntroClient />
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
