import { getPosts } from "@/api/req";
import Blogs from "@/components/home/blog/Blogs";

export default async function BlogsPage() {
  const { edges, pageInfo } = await getPosts();
  return (
    <main className="w-full max-w-4xl py-6 px-4 text-center mx-auto ">
      <h1 className="text-4xl font-bold mb-2">My Blog. Your Journey.</h1>
      <p className="text-base mb-8">
        Explore diverse topics, expand your mind. 🧠
      </p>
      <Blogs initialPosts={edges} pageInfo={pageInfo} />
    </main>
  );
}
