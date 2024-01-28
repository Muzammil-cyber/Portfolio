import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        className="h-8 w-auto max-sm:hidden hidden sm:dark:inline"
        src="/logo.svg"
        alt="Muzammil Loya's Portfolio logo"
        width={100}
        height={100}
        priority
      />
      <Image
        className="h-8 w-auto dark:hidden max-sm:hidden"
        src="/logo-dark.svg"
        alt="Muzammil Loya's Portfolio logo"
        width={100}
        height={100}
        priority
      />
      <Image
        className="h-8 w-auto sm:hidden min-w-[2rem]"
        src="/logo-short.png"
        alt="Muzammil Loya's Portfolio logo"
        width={50}
        height={50}
        priority
      />
    </div>
  );
}
