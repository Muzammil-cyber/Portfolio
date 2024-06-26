"use client";
import { FaFilePdf } from "react-icons/fa";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

export default function HeroLink() {
  return (
    <Link
      rel="nocrawal, nofollow"
      className="primary-icon-btn"
      href={"/Muzammil-Loya.pdf"}
      target="_blank"
      type="application/pdf"
      onClick={() => sendGTMEvent({ event: "View CV", value: "CV" })}
      aria-label="Download CV as PDF"
    >
      <FaFilePdf className="fill-white" /> Download CV
    </Link>
  );
}
