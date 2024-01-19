import LoadingProject from "@/components/projects/loading";
import dynamic from "next/dynamic";

const DynamicProjects = dynamic(() => import("@/components/projects"), {
  loading: () => (
    <div className="w-full flex flex-wrap-reverse gap-4 justify-center">
      <LoadingProject />
      <LoadingProject />
      <LoadingProject />
    </div>
  ),
  ssr: false,
});

export default function ProjectsPage() {
  return <DynamicProjects />;
}
