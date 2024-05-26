import { getPostById } from "@/api/req";
import WholeBlog from "@/components/home/blog/WholeBlog";
import RawToHtml from "@/utils/rawToHtml";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPostById(id);
  return (
    <main className="w-full max-w-4xl py-6 px-4 mx-auto">
      <WholeBlog post={post} />
    </main>
  );
}
