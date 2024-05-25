import { PostType } from "@/type/types";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const LatestBlog = ({ post }: { post: PostType }) => {
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
    <section className="px-4 py-8 w-full flex flex-col md:flex-row bg-white dark:bg-slate-900 justify-center gap-6 h-[572px]">
      <main className="max-w-3xl w-full md:w-2/3">
        <h1 className="text-5xl font-extrabold dark:text-white mb-6">
          Latest Blog Post
        </h1>
        <Link href={`blogs/${post.id}`}>
          <div className="w-full h-auto aspect-video relative">
            <div className="absolute bottom-0 left-0 m-4">
              <p className="texl-2xl  font-bold bg-white dark:bg-slate-800 py-2 px-4 rounded-t-lg inline-block uppercase">
                {/* Span for purple dot */}
                <span className="bg-indigo-700 w-2 h-2 rounded-full inline-block mr-2"></span>
                {post.topic}
              </p>
              <h2 className="text-4xl font-bold bg-white dark:bg-slate-800 p-4 rounded-b-lg rounded-tr-lg inline-block">
                {post.title}
              </h2>
            </div>
            <div className="absolute top-4 right-4 rounded-full bg-white dark:bg-slate-800 px-2">
              <p className="p-2 font-bold">{dateCreated()}</p>
            </div>
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={post.coverImage.url}
              alt={post.title}
              width={post.coverImage.width}
              height={post.coverImage.height}
            />
          </div>
        </Link>
      </main>
      <aside className="w-1/3 h-auto">
        <h4 className="text-3xl font-bold mb-9">More</h4>
        <ul className="flex flex-col h-5/6 gap-4">
          <Link
            href={`/blogs`}
            className="relative flex h-1/2 items-center justify-center overflow-hidden rounded-lg group parent"
          >
            <Image
              src={"/blog-background.png"}
              height={90}
              width={160}
              alt="To project page"
              className="w-full h-auto object-contain"
            />
            <h5 className="absolute text-3xl font-bold uppercase !text-white bg-slate-800 px-4 py-2 rounded-md group-hover:text-2xl">
              More Blog Posts
            </h5>
          </Link>

          <Link
            href={`/projects`}
            className="relative flex h-1/2 items-center justify-center overflow-hidden rounded-lg group"
          >
            <Image
              src={"/project_background.png"}
              height={90}
              width={160}
              alt="To project page"
              className="w-full h-auto object-contain"
            />
            <h5 className="absolute text-3xl font-bold uppercase !text-white group-hover:text-2xl">
              My projects
            </h5>
          </Link>
        </ul>
      </aside>
    </section>
  );
};
export default LatestBlog;
