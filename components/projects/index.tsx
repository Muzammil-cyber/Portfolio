import { ProjectType } from "@/type/types";

import Project from "./project";

export default function Projects({ projects }: { projects: ProjectType[] }) {
  return (
    <div className="w-full flex flex-wrap-reverse gap-4 justify-center">
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          desc={project.desc}
          tech={project.tech}
          gitUrl={project.gitUrl}
          webUrl={project?.webUrl}
        />
      ))}
    </div>
  );
}
