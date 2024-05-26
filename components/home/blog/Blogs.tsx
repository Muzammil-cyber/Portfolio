"use client";
import { PageInfoType, PostEdgeType } from "@/type/types";
import Post from "./post";
import { useState } from "react";

const Blogs = ({
  initialPosts,
  pageInfo,
}: {
  initialPosts: PostEdgeType[];
  pageInfo: PageInfoType;
}) => {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [endCursor, setEndCursor] = useState<string>(pageInfo?.endCursor);
  return (
    <>
      <section className="grid sm:grid-cols-2 grid-cols-1 gap-2 text-left max-sm:divide-y-2 place-items-center">
        {posts.map((post) => (
          <Post key={post.cursor} post={post.node} />
        ))}
      </section>
      <button
        className={`secondary-btn my-8 mx-4 font-bold uppercase disabled:hover:cursor-progress ${
          !endCursor && "hidden"
        }`}
        aria-label="Load More Blogs"
        onClick={() => {
          setLoading(true);
          import("@/api/req").then(({ getPosts }) => {
            getPosts({
              first: 5,
              after: endCursor,
            }).then((data) => {
              setPosts([...posts, ...data.edges]);
              setLoading(false);

              setEndCursor(
                data.pageInfo.hasNextPage && data.pageInfo.endCursor
              );
            });
          });
        }}
        disabled={loading}
      >
        {loading ? "Loading..." : "More Blogs"}
      </button>
    </>
  );
};
export default Blogs;
