import { PostWithDescriptionType } from "@/type/types";
import RawToHtml from "@/utils/rawToHtml";
import dynamic from "next/dynamic";
import { useCallback } from "react";

const DynamicImage = dynamic(() => import("@/components/NextImage"));

async function WholeBlog({ post }: { post: PostWithDescriptionType }) {
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
  const img = post.coverImage;
  return (
    <>
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm dark:text-slate-100 mb-4">
        <span className="bg-indigo-800 text-white uppercase py-1 px-2 rounded-xl">
          {post.topic}
        </span>{" "}
        • {dateCreated()}
      </p>
      {post.coverImage && (
        <DynamicImage
          src={img.url}
          alt={post.title}
          width={img.width}
          height={img.height}
          className="w-full md:h-96 object-cover rounded-lg mb-4 aspect-video"
        />
      )}

      <section className="text-left space-y-4 first-letter:text-8xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
        <RawToHtml raw={post.desc.raw} />
      </section>
    </>
  );
}
export default WholeBlog;
