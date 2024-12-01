import Image from "next/image";

export default function Logo() {
  return (
    <a target="_blank" href="https://muzammil-cool.vercel.app/">
      <Image
        className="hidden h-8 w-auto max-sm:hidden sm:dark:inline"
        src="/logo.svg"
        alt="Muzammil Loya's Portfolio logo"
        width={100}
        height={100}
        priority={false}
      />
      <Image
        className="h-8 w-auto dark:hidden max-sm:hidden"
        src="/logo-dark.svg"
        alt="Muzammil Loya's Portfolio logo"
        width={100}
        height={100}
        priority={false}
      />
      <Image
        className="h-8 w-auto min-w-[2rem] sm:hidden"
        src="/logo-short.png"
        alt="Muzammil Loya's Portfolio logo"
        width={50}
        height={50}
        priority
      />
    </a>
  );
}
