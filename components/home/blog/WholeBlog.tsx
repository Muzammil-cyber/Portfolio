import { PostWithDescriptionType } from "@/type/types";
import { getImageRemote } from "@/utils/image";
import RawToHtml from "@/utils/rawToHtml";
import Image from "next/image";
import { useCallback } from "react";

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

  const { base64, img } = post.coverImage
    ? await getImageRemote(post.coverImage.url)
    : { base64: "", img: { src: "", height: 0, width: 0 } };
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
        <Image
          src={img.src}
          alt={post.title}
          width={img.width}
          height={img.height}
          className="w-full md:h-96 object-cover rounded-lg mb-4 aspect-video"
          placeholder="blur"
          blurDataURL={base64}
        />
      )}

      <section className="text-left space-y-4 first-letter:text-8xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
        <RawToHtml raw={post.desc.raw} />
      </section>
    </>
  );
}
export default WholeBlog;
