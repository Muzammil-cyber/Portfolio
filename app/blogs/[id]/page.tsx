import { getPostById } from "@/api/req";
import WholeBlog from "@/components/home/blog/WholeBlog";
import { Metadata, ResolvingMetadata } from "next";

import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params;
  const post = await getPostById(id);
  const { creator, authors, publisher } = await parent;

  return {
    title: post.title,
    category: "article",
    creator,
    publisher,
    authors,
    keywords: [post.topic],
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;
  const post = await getPostById(id);
  if (!post) notFound();
  return (
    <main className="w-full max-w-4xl py-6 px-4 mx-auto">
      <WholeBlog post={post} />
    </main>
  );
}
