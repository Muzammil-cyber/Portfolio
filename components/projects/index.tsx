import { data } from "./data";
import LoadingProject from "./loading";
import Project from "./project";

export default function Projects() {
  return (
    <div className="w-full flex flex-wrap-reverse gap-4 justify-center">
      {data.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          desc={project.desc}
          tech={project.tech}
          gitUrl={project.gitUrl}
          webUrl={project?.webUrl}
        />
      ))}
      {/* <LoadingProject /> */}
    </div>
  );
}
