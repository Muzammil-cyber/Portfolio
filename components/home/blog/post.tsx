import { PostType } from "@/type/types";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import Link from "next/link";
import { useCallback } from "react";
import { PiReadCvLogoFill } from "react-icons/pi";

const DynamicImage = dynamic(() => import("@/components/NextImage"));

export default function Post({ post }: { post: PostType }) {
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
    <Link
      prefetch={false}
      href={`/blogs/${post.id}`}
      className={`w-full ${post.coverImage && `row-span-2`}`}
    >
      <motion.div
        className="sm:max-w-lg p-4 cursor-pointer max-sm:w-full"
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {post.coverImage && (
          <DynamicImage
            src={post.coverImage.url}
            width={post.coverImage.width}
            height={post.coverImage.height}
            alt={post.title}
            className="object-cover mb-2 rounded-t"
          />
        )}
        <motion.h3 className="text-3xl font-extrabold dark:text-white">
          {post.title}
        </motion.h3>
        <motion.div className="mt-4 flex justify-between items-center">
          <motion.p className="text-sm dark:text-slate-300">
            <motion.span className="bg-indigo-800 text-white uppercase py-1 px-2 rounded-xl">
              {post.topic}
            </motion.span>{" "}
            • {dateCreated()}
          </motion.p>
          <motion.button className="secondary-icon-btn">
            Read
            <PiReadCvLogoFill className="text-2xl" />
          </motion.button>
        </motion.div>
      </motion.div>
    </Link>
  );
}

