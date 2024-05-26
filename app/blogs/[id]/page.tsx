import { getPostById } from "@/api/req";
import WholeBlog from "@/components/home/blog/WholeBlog";
import { Metadata, ResolvingMetadata } from "next";

import { notFound } from "next/navigation";

const BASE_URL = "https://muzammilloya-portfolio.vercel.app";

interface Props {
  params: { id: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params;
  const post = await getPostById(id);
  const {
    creator,
    authors,
    publisher,
    openGraph: { images },
    twitter: { images: twitterImages },
  } = await parent;
  const description = (post.title + " " + post.desc.raw.toString()).substring(
    0,
    130
  );

  return {
    title: post.title,
    category: "article",
    creator,
    publisher,
    authors,
    keywords: [post.topic],
    description,
    openGraph: {
      title: post.title,
      description,
      url: `${BASE_URL}/blogs/${id}`,
      type: "article",
      locale: "en_US",
      images: [
        {
          url: post.coverImage.url,
          width: 800,
          height: 600,
          alt: post.title,
        },
        ...images,
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@MuzammilLoya",
      title: post.title,
      description,
      images: [post.coverImage.url, ...twitterImages],
    },
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
