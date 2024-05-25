"use server";
import { unstable_noStore as noStore } from "next/cache";
import { gql } from "graphql-request";
import { PostType, ProjectConnectionType, ProjectType } from "@/type/types";
import { hygraph } from "./header";
// import { cache } from "react";

export async function getPorjects(
  cursor: {
    first: number;
    after?: string;
  } = { first: 5 }
): Promise<ProjectConnectionType> {
  noStore();
  const QUERY = gql`
    query getProjects($first: Int, $after: String) {
      projectsConnection(
        first: $first
        after: $after
        orderBy: createdAt_DESC
      ) {
        edges {
          cursor
          node {
            id
            desc
            gitUrl
            tech
            title
            webUrl
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
          pageSize
        }
      }
    }
  `;
  const { projectsConnection }: { projectsConnection: ProjectConnectionType } =
    await hygraph.request(QUERY, cursor);
  console.log(projectsConnection);

  return projectsConnection;
}

export const getPosts = async (): Promise<PostType[]> => {
  noStore(); // disable caching for this page because it'll be changing frequently
  const QUERY = gql`
    {
      posts(last: 1) {
        id
        title
        createdAt
        topic
        coverImage {
          id
          url
          width
          height
        }
      }
    }
  `;
  const res: any = await hygraph.request(QUERY);

  const posts: PostType[] = res.posts.map((post: any) => ({
    id: post.id,
    title: post.title,
    createdAt: post.createdAt,
    topic: post.topic,
    coverImage: post.coverImage,
  }));
  return posts;
};
// This code exports two functions, `getPosts` and `getProjects`, which fetch data from a GraphQL API and return it as arrays of custom data types `PostType` and `ProjectType` respectively. The `noStore` function is used to disable caching for this page because the data is expected to change frequently.