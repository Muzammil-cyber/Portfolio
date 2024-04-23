import { getPosts } from "@/api/req";
import Blog from "../blog";

const DynamicBlog = async () => {
  const posts = await getPosts();
  return <Blog items={posts} />;
};
export default DynamicBlog;
