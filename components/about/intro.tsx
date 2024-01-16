import Image from "next/image";

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row md:justify-center items-center gap-4 ">
      <div className="sm:w-1/2 text-left space-y-4 text-slate-900 dark:text-slate-400 text-lg mx-auto">
        <h2 className="text-3xl font-bold dark:text-white">
          Hi, I&apos;m Muzammil Loya 👋
        </h2>{" "}
        <p>
          I&apos;m a 19 year old{" "}
          <span className="font-bold">Web developer</span> based in Pakistan.
          I&apos;m passionate about building modern web apps that helps others
          (including me) to improve their lives. I started my web development
          adventure at the age of 18 and now I work for varoius companies around
          the world (emoji).
        </p>
        <p>
          I&apos;m working as a freelancer, so if you want to hire me, check the
          section below. Currently, I&apos;m looking for a job to enhance my
          skills and take on newer challanges. I&apos;m always open to
          innovative ideas and solutions, so I think we&apos;re gonna get along.
          😎
        </p>
        <p>
          Sounds interesting? Feel free to{" "}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            className="link !text-lg"
          >
            contact me! (postbox emoji)
          </a>
        </p>
      </div>
      <Image
        className="rounded-full sm:w-1/2 sm:h-auto h-[400px] w-[400px] image-back"
        src={"/profile-removebg.png"}
        alt="It's a me, Muzammil"
        width={500}
        height={500}
      />
    </section>
  );
}
