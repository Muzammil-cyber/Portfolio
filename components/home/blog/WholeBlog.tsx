import { PostWithDescriptionType } from "@/type/types";
import RawToHtml from "@/utils/rawToHtml";
import Image from "next/image";
import { useCallback } from "react";

function WholeBlog({ post }: { post: PostWithDescriptionType }) {
  const dateCreated = useCallback(() => {
    // How long since created?
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const current = new Date();
    const created = new Date(post.createdAt);
    const elapsed = current.getTime() - created.getTime();
    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + " months ago";
    } else {
      return Math.round(elapsed / msPerYear) + " years ago";
    }
  }, [post.createdAt]);
  return (
    <>
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm dark:text-slate-100">
        <span className="bg-indigo-800 text-white uppercase py-1 px-2 rounded-xl">
          {post.topic}
        </span>{" "}
        • {dateCreated()}
      </p>
      <Image
        src={post.coverImage.url}
        alt={post.title}
        width={post.coverImage.width}
        height={post.coverImage.height}
        className="w-full md:h-96 object-cover rounded-lg my-4 aspect-video"
      />

      <section className="text-left space-y-4">
        <RawToHtml raw={post.desc.raw} />
      </section>
    </>
  );
}
export default WholeBlog;
