import { PostType } from "@/type/types";
import { RichText } from "@graphcms/rich-text-react-renderer";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction, useCallback } from "react";
import { PiReadCvLogoFill } from "react-icons/pi";

export default function Post({
  post,
  setId,
  selectedId,
}: {
  post: PostType;
  setId: Dispatch<SetStateAction<string | number>>;
  selectedId: string | number;
}) {
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
      <motion.div
        layoutId={post.id.toString()}
        onClick={() => setId(post.id)}
        className="max-w-lg bg-slate-200 dark:bg-slate-800 rounded-md p-4 cursor-pointer"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <motion.h1 className="text-3xl font-extrabold dark:text-white">
          {post.title}
        </motion.h1>
        <span className="hidden">
          {" "}
          <RichText content={post.desc} />
        </span>
        <motion.div className="mt-4 flex justify-between items-center">
          <motion.p className="text-sm dark:text-slate-300">
            <motion.span className="bg-indigo-800 text-white uppercase py-1 px-2 rounded-xl">
              {post.topic}
            </motion.span>{" "}
            • {dateCreated()}
          </motion.p>
          <motion.button
            onClick={() => setId(post.id)}
            className="secondary-icon-btn"
          >
            Read
            <PiReadCvLogoFill className="text-2xl" />
          </motion.button>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {selectedId == post.id && (
          <motion.div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center p-4 cursor-not-allowed">
            <motion.div className="max-w-xl w-full max-h-full bg-slate-200 dark:bg-slate-800 rounded-md p-4 cursor-default overflow-y-auto shadow-md">
              <motion.h1 className="text-3xl font-extrabold dark:text-white mb-4">
                {post.title}
              </motion.h1>
              {/* <motion.p className="dark:text-slate-400 text-xl ">
                <RichText content={post.desc} />
                {post.desc}
              </motion.p> */}
              <RichText
                content={post.desc}
                renderers={{
                  bold: ({ children }: any) => <strong>{children}</strong>,
                  italic: ({ children }: any) => <em>{children}</em>,
                  a: ({ children, openInNewTab, href, rel, ...rest }) => {
                    if (href.match(/^https?:\/\/|^\/\//i)) {
                      return (
                        <Link
                          href={href}
                          target={openInNewTab ? "_blank" : "_self"}
                          rel={rel || "external"}
                          className="link text-xl"
                          {...rest}
                        >
                          {children}
                        </Link>
                      );
                    }

                    return (
                      <Link href={href} {...rest} className="link">
                        {children}
                      </Link>
                    );
                  },
                  p: ({ children }: any) => (
                    <p className="dark:text-slate-200 text-xl my-2">
                      {children}
                    </p>
                  ),
                  li: ({ children }: any) => (
                    <li className="dark:text-slate-200 text-xl my-2">
                      {children}
                    </li>
                  ),
                  h1: ({ children }: any) => (
                    <h1 className="dark:text-slate-200 text-2xl font-bold my-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }: any) => (
                    <h2 className="dark:text-slate-200 text-2xl font-bold my-4">
                      {children}
                    </h2>
                  ),
                  code_block: ({ children }: any) => (
                    <pre className="dark:text-slate-200 bg-slate-300 dark:bg-slate-900 text-lg my-4 p-1 rounded-md overflow-x-auto font-mono">
                      {children}
                    </pre>
                  ),
                  code: ({ children }: any) => (
                    <code className="dark:text-slate-200 text-lg bg-slate-300 dark:bg-slate-900 p-1 rounded-md font-mono">
                      {children}
                    </code>
                  ),
                }}
              />
              {/* <AnimateDesc desc={post.desc} /> */}
              <motion.p className="text-sm dark:text-slate-300 my-4">
                <motion.span className="bg-indigo-800 text-white uppercase py-1 px-2 rounded-xl">
                  {post.topic}
                </motion.span>{" "}
                • {dateCreated()}
              </motion.p>
              <motion.button
                onClick={() => setId(null)}
                className="w-full py-1 px-2 mt-2 text-lg font-semibold text-slate-900 rounded-lg border border-slate-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

