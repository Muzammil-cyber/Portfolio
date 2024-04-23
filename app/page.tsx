// import { getPosts, hygraph } from "@/api/req";
import { hygraph } from "@/api/header";
import { getPosts } from "@/api/req";
import HeroHome from "@/components/home/Hero";
import Blog from "@/components/home/blog";
import DynamicBlog from "@/components/home/blog/dynamicBlog";
import LoadingBlog from "@/components/home/blog/loading";
import { PostType } from "@/type/types";
import { getImageLocal } from "@/utils/image";
import { gql } from "graphql-request";


import { Suspense } from "react";





export default async function Home() {
  const { base64, img } = await getImageLocal("/profile-removebg.png");
 
  return (
    <main className="flex-auto">
      <HeroHome base64={base64} img={img} />
      <hr className="border-t-4 dark:border-slate-800" />
      <Suspense fallback={<LoadingBlog />}>
        <DynamicBlog />
      </Suspense>

    </main>
  );
}
