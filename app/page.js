import HeroHome from "@/components/home/Hero";
import Blog from "@/components/home/blog.tsx";

export default function Home() {
  return (
    <main className="flex-auto">
      <HeroHome />
      <hr className="border-t-4 dark:border-slate-800" />
      <Blog />
    </main>
  );
}
