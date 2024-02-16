"use server";
import { unstable_noStore as noStore } from "next/cache";
import { gql } from "graphql-request";
import { ProjectType } from "@/type/types";
import { hygraph } from "./header";

export async function getPorjects(): Promise<ProjectType[]> {
  noStore();
  const QUERY = gql`
    {
      projects(last: 10) {
        id
        desc
        gitUrl
        tech
        title
        webUrl
      }
    }
  `;
  const { projects }: { projects: ProjectType[] } = await hygraph.request(
    QUERY
  );
  return projects;
}
// This code exports two functions, `getPosts` and `getProjects`, which fetch data from a GraphQL API and return it as arrays of custom data types `PostType` and `ProjectType` respectively. The `noStore` function is used to disable caching for this page because the data is expected to change frequently.