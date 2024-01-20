import HeroHome from "@/components/home/Hero";
import LoadingBlog from "@/components/home/blog/loading";
import { getImageLocal } from "@/utils/image";

import dynamic from "next/dynamic";

const DynamicBlog = dynamic(() => import("@/components/home/blog"), {
  loading: () => <LoadingBlog />,
  ssr: false,
});

export default async function Home() {
  const { base64, img } = await getImageLocal("/profile-removebg.png");
  return (
    <main className="flex-auto">
      <HeroHome base64={base64} img={img} />
      <hr className="border-t-4 dark:border-slate-800" />
      <DynamicBlog />
    </main>
  );
}
