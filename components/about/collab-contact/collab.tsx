import Link from "next/link";

export default function Collab() {
  return (
    <article className="w-full sm:w-1/2 text-left ">
      <h3 className="text-3xl font-bold mb-3">Collabration</h3>
      <p>
        Got a project that needs a rockstar with skills and gumption? Don&apos;t
        be shy, hit my inbox – let&apos;s make magic happen! ✨
      </p>
      <Link
        rel="author"
        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
        className="contact-link mt-4"
        aria-label="Email Muzammil Loya"
      >
        Get in touch &rarr;
      </Link>
    </article>
  );
}
