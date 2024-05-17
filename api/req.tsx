"use server";
import { unstable_noStore as noStore } from "next/cache";
import { gql } from "graphql-request";
import { PostType, ProjectType } from "@/type/types";
import { hygraph } from "./header";
import { cache } from "react";

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

export const getPosts = async (): Promise<PostType[]> => {
  noStore(); // disable caching for this page because it'll be changing frequently
  const QUERY = gql`
    {
      posts(last: 10) {
        desc {
          raw
        }
        id
        title
        createdAt
        topic
      }
    }
  `;
  const res: any = await hygraph.request(QUERY);

  const posts: PostType[] = res.posts.map((post: any) => ({
    desc: post.desc.raw,
    id: post.id,
    title: post.title,
    createdAt: post.createdAt,
    topic: post.topic,
  }));
  return posts;
};
// This code exports two functions, `getPosts` and `getProjects`, which fetch data from a GraphQL API and return it as arrays of custom data types `PostType` and `ProjectType` respectively. The `noStore` function is used to disable caching for this page because the data is expected to change frequently.