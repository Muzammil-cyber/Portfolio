import Link from "next/link";

export default function Contact() {
  return (
    <article className="w-full sm:w-1/2 text-left">
      <h3 className="text-3xl font-bold mb-3">Contact</h3>
      <p>
        Drop me a line!{" "}
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          className="contact-link"
        >
          Email,
        </Link>{" "}
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_LINKEDIN}`}
          className="contact-link"
        >
          LinkedIn,
        </Link>
        even{" "}
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_INSTAGRAM}`}
          className="contact-link"
        >
          Instagram
        </Link>{" "}
        - no platform&apos;s off-limits. Got a burning question or a project
        that needs fire? I&apos;m all ears (and eyes)!
      </p>
    </article>
  );
}