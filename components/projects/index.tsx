"use client";
import { PageInfoType, ProjectEdgeType } from "@/type/types";

import Project from "./project";
import { useState } from "react";

export default function Projects({
  projects,
  pageInfo,
}: {
  projects: ProjectEdgeType[];
  pageInfo: PageInfoType;
}) {
  const [projectState, setProjectState] = useState(projects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [endCursor, setEndCursor] = useState<string>(pageInfo?.endCursor);
  return (
    <>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        {projectState.map((project) => (
          <Project
            key={project.node.id}
            title={project.node.title}
            desc={project.node.desc}
            tech={project.node.tech}
            gitUrl={project.node.gitUrl}
            webUrl={project?.node.webUrl}
          />
        ))}
      </div>
      <button
        className={`secondary-btn my-8 mx-4 font-bold uppercase disabled: ${
          !endCursor && "hidden"
        }`}
        aria-label="Load More Projects"
        onClick={() => {
          setLoading(true);
          import("@/api/req").then(({ getPorjects }) => {
            getPorjects({
              first: 5,
              after: endCursor,
            }).then((data) => {
              setProjectState([...projectState, ...data.edges]);
              setLoading(false);
              console.log(data.pageInfo.endCursor);
              setEndCursor(
                data.pageInfo.hasNextPage && data.pageInfo.endCursor
              );
            });
          });
        }}
        disabled={loading}
      >
        {loading ? "Loading..." : "More Projects"}
      </button>
    </>
  );
}
