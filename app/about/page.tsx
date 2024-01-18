import CollabContact from "@/components/about/collab-contact";
import Facts from "@/components/about/facts";
import Intro from "@/components/about/intro";
import More from "@/components/about/more";

export default function About() {
  return (
    <main className="w-full max-w-4xl py-6 px-4 text-center mx-auto ">
      <h1 className="text-4xl font-bold mb-2">About</h1>
      <p className="text-base mb-8">
        Want to know more about me?
        <br /> You&apos;ve come to the right place 🎓
      </p>
      <Intro />
      <More />
      <Facts />
      <CollabContact />
    </main>
  );
}
