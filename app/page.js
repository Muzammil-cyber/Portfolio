import HeroHome from "@/components/home/Hero";
import LoadingBlog from "@/components/home/blog/loading";

import dynamic from "next/dynamic";

const DynamicBlog = dynamic(() => import("@/components/home/blog.tsx"), {
  loading: () => <LoadingBlog />,
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex-auto">
      <HeroHome />
      <hr className="border-t-4 dark:border-slate-800" />
      <DynamicBlog />
    </main>
  );
}
