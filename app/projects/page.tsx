import { getPorjects } from "@/api/req";
import LoadingProject from "@/components/projects/loading";
import dynamic from "next/dynamic";

const DynamicProjects = dynamic(() => import("@/components/projects"), {
  loading: () => <ProjectLoading />,
});

function ProjectLoading() {
  return (
    <div className="flex w-full flex-wrap-reverse justify-center gap-4">
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
