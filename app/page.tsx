import { getLatestPost } from "@/api/req";
import HeroHome from "@/components/home/Hero";

import LatestBlog from "@/components/home/blog/LatestBlog";

import LoadingBlog from "@/components/home/blog/loading";
import { PostType } from "@/type/types";


import { Suspense } from "react";

export const revalidate = 3600; // revalidate the data at most every hour

export default async function Home() {
  const post: PostType = await getLatestPost();

  return (
    <main className="flex-auto">
      <HeroHome />
      <hr className="border-t-4 dark:border-secondary-800" />
      <Suspense fallback={<LoadingBlog />}>
        <LatestBlog post={post} />
      </Suspense>
    </main>
  );
}
