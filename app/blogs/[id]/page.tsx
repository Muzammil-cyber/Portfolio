import { getPostById } from "@/api/req";
import WholeBlog from "@/components/home/blog/WholeBlog";
import { BASE_URL } from "@/utils/defualts";
import { getPlainText } from "@/utils/getPlainText";
import { Metadata, ResolvingMetadata } from "next";

import { notFound } from "next/navigation";



interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;
  const post = await getPostById(id.toLowerCase());
  if (!post) notFound();
  const {
    creator,
    authors,
    publisher,
    openGraph: { images },
    twitter: { images: twitterImages },
  } = await parent;
  const description =
    (
      post.title +
      " " +
      // @ts-expect-error
      getPlainText(post.desc.raw)
    ).substring(0, 120) + "...";
  return {
    title: post.title,
    category: "article",
    creator,
    publisher,
    authors,
    keywords: [post.topic, ...post.title.split(" ")],
    description,
    openGraph: {
      title: post.title,
      description,
      url: `${BASE_URL}/blogs/${id}`,
      type: "article",
      locale: "en_US",
      images: [
        post.coverImage && {
          url: post?.coverImage?.url,
          width: 800,
          height: 600,
          alt: post.title,
        },
        ...images,
      ],
      publishedTime: post.createdAt.toString(),
    },
    twitter: {
      card: "summary_large_image",
      creator: "@MuzammilLoya",
      title: post.title,
      description,
      images: [post.coverImage && post.coverImage?.url, ...twitterImages],
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { id } = params;
  const post = await getPostById(id.toLowerCase());
  if (!post) notFound();
  return (
    <main className="w-full max-w-4xl py-6 px-4 mx-auto">
      <WholeBlog post={post} />
    </main>
  );
}
