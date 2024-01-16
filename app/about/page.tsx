import Intro from "@/components/about/intro";

export default function About() {
  return (
    <main className="w-screen max-w-4xl py-6 px-4 text-center mx-auto ">
      <h1 className="text-4xl font-bold mb-2">About</h1>
      <p className="text-base mb-8">
        Want to know more about me?
        <br /> You&apos;ve come to the right place 🎓
      </p>
      <Intro />
    </main>
  );
}
