import { getPorjects } from "@/api/req";
import LoadingProject from "@/components/projects/loading";
import dynamic from "next/dynamic";


const DynamicProjects = dynamic(() => import("@/components/projects"), {
  loading: () => <ProjectLoading />,
  ssr: false,
});

function ProjectLoading() {
  return (
    <div className="w-full flex flex-wrap-reverse gap-4 justify-center">
      <LoadingProject />
      <LoadingProject />
      <LoadingProject />
    </div>
  );
}

export default async function ProjectsPage() {
  const { edges: projects, pageInfo } = await getPorjects();
  return <DynamicProjects projects={projects} pageInfo={pageInfo} />;
}
