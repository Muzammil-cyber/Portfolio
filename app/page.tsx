// import { getPosts, hygraph } from "@/api/req";
import { hygraph } from "@/api/header";
import HeroHome from "@/components/home/Hero";
import LoadingBlog from "@/components/home/blog/loading";
import { PostType } from "@/type/types";
import { getImageLocal } from "@/utils/image";
import { gql } from "graphql-request";

import dynamic from "next/dynamic";

const DynamicBlog = dynamic(() => import("@/components/home/blog"), {
  loading: () => <LoadingBlog />,
  ssr: false,
});

async function getPosts(): Promise<PostType[]> {
  // noStore(); // disable caching for this page because it'll be changing frequently
  const QUERY = gql`
    {
      posts {
        desc {
          raw
        }
        id
        title
        createdAt
        topic
      }
    }
  `;
  const res: any = await hygraph.request(QUERY);

  const posts: PostType[] = res.posts.map((post: any) => ({
    desc: post.desc.raw,
    id: post.id,
    title: post.title,
    createdAt: post.createdAt,
    topic: post.topic,
  }));
  return posts;
}

export default async function Home() {
  const { base64, img } = await getImageLocal("/profile-removebg.png");
  const posts = await getPosts();
  return (
    <main className="flex-auto">
      <HeroHome base64={base64} img={img} />
      <hr className="border-t-4 dark:border-slate-800" />
      <DynamicBlog items={posts} />
    </main>
  );
}
