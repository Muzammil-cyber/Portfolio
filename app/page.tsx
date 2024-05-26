import { getLatestPost } from "@/api/req";
import HeroHome from "@/components/home/Hero";
import Blog from "@/components/home/blog";
import LatestBlog from "@/components/home/blog/LatestBlog";

import LoadingBlog from "@/components/home/blog/loading";
import { PostType } from "@/type/types";
import { getImageLocal } from "@/utils/image";
import { revalidatePath, revalidateTag } from "next/cache";

import { Suspense } from "react";

// export const revalidate = 3600; // revalidate the data at most every hour

export default async function Home() {
  // const { base64, img } = await getImageLocal("/profile-removebg.png");
  const post: PostType = await getLatestPost();

  return (
    <main className="flex-auto">
      <HeroHome />
      <hr className="border-t-4 dark:border-slate-800" />
      <Suspense fallback={<LoadingBlog />}>
        {/* <Blog items={posts} /> */}
        <LatestBlog post={post} />
      </Suspense>
    </main>
  );
}
