import { getPosts } from "@/api/req";
import HeroHome from "@/components/home/Hero";
import Blog from "@/components/home/blog";

import LoadingBlog from "@/components/home/blog/loading";
import { PostType } from "@/type/types";
// import { getImageLocal } from "@/utils/image";
// import { revalidatePath, revalidateTag } from "next/cache";

import { Suspense } from "react";

// export const revalidate = 1800; // revalidate the data at most every half hour

export default async function Home() {
  // const { base64, img } = await getImageLocal("/profile-removebg.png");
  const posts: PostType[] = await getPosts();

  return (
    <main className="flex-auto">
      <HeroHome />
      <hr className="border-t-4 dark:border-slate-800" />
      <Suspense fallback={<LoadingBlog />}>
        <Blog items={posts} />
      </Suspense>
    </main>
  );
}
