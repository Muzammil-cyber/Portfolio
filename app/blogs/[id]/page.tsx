import { getPostById } from "@/api/req";
import WholeBlog from "@/components/home/blog/WholeBlog";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPostById(id);
  if (!post) return notFound();
  return (
    <main className="w-full max-w-4xl py-6 px-4 mx-auto">
      <WholeBlog post={post} />
    </main>
  );
}
