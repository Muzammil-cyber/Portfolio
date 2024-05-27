import { getPosts } from "@/api/req";
import Blogs from "@/components/home/blog/Blogs";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { edges } = await getPosts();
  const uniqueTopics = edges
    .map(({ node }) => node.topic)
    .filter((value, index, self) => self.indexOf(value) === index);
  const { creator, authors, publisher } = await parent;

  return {
    title: "Software Engineer 🚀 | Muzammil Loya's Blog",
    category: "article",
    creator,
    publisher,
    authors,
    keywords: uniqueTopics,
    description:
      "Explore diverse topics, expand your mind. 🧠 with " +
      uniqueTopics.join(", ") +
      "and more.",
    openGraph: {
      title: "Blogs",
      description: "Explore diverse topics, expand your mind. 🧠",
      url: "https://muzammilloya-portfolio.vercel.app/blogs",
      type: "article",
      locale: "en_US",
      images: edges.map(
        (edge) =>
          edge.node.coverImage && {
            url: edge.node.coverImage?.url,
            width: edge.node.coverImage?.width,
            height: edge.node.coverImage?.height,
            alt: edge.node.title,
          }
      ),
    },
    twitter: {
      card: "summary_large_image",
      creator: "@MuzammilLoya",
      title: "Software Engineer 🚀 | Muzammil Loya's Blog",
      description:
        "Explore diverse topics, expand your mind. 🧠 with " +
        uniqueTopics.join(", ") +
        "and more.",
      images: edges.map(({ node }) => node.coverImage && node.coverImage.url),
    },
  };
}

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
