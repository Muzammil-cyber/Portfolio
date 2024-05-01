import Link from "next/link";

export default function Contact() {
  return (
    <article className="w-full sm:w-1/2 text-left">
      <h3 className="text-3xl font-bold mb-3">Contact</h3>
      <p>
        Drop me a line!{" "}
        <Link
          rel="author"
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          className="contact-link"
          aria-label="Email Muzammil Loya"
        >
          Email,
        </Link>{" "}
        <Link
          target="_blank"
          rel="external"
          href={`${process.env.NEXT_PUBLIC_LINKEDIN}`}
          className="contact-link"
          aria-label="LinkedIn Profile of Muzammil Loya"
        >
          LinkedIn,
        </Link>
        even{" "}
        <Link
          target="_blank"
          rel="external"
          href={`${process.env.NEXT_PUBLIC_INSTAGRAM}`}
          className="contact-link"
          aria-label="Instagram Profile of Muzammil Loya"
        >
          Instagram
        </Link>{" "}
        - no platform&apos;s off-limits. Got a burning question or a project
        that needs fire? I&apos;m all ears (and eyes)!
      </p>
    </article>
  );
}
