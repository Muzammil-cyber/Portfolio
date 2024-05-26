"use server";
import { unstable_noStore as noStore } from "next/cache";
import { gql } from "graphql-request";
import {
  ID,
  PostConnectionType,
  PostType,
  PostWithDescriptionType,
  ProjectConnectionType,
  ProjectType,
} from "@/type/types";
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

  return projectsConnection;
}

export const getLatestPost = async (): Promise<PostType> => {
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
  return posts[0];
};

export async function getPosts(
  cursor: {
    first: number;
    after?: string;
  } = { first: 4 }
): Promise<PostConnectionType> {
  noStore();
  const QUERY = gql`
    query getPosts($first: Int, $after: String) {
      postsConnection(first: $first, after: $after, orderBy: createdAt_DESC) {
        edges {
          cursor
          node {
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
  const { postsConnection }: { postsConnection: PostConnectionType } =
    await hygraph.request(QUERY, cursor);
  return postsConnection;
}

export async function getPostsIds() {
  const QUERY = gql`
    {
      posts(last: 10) {
        id
      }
    }
  `;
  const res: any = await hygraph.request(QUERY);
  return res.posts;
}

export async function getPostById(id: ID): Promise<PostWithDescriptionType> {
  const QUERY = gql`
    query getPostById($id: ID!) {
      post(where: { id: $id }) {
        id
        title
        topic
        createdAt
        coverImage {
          id
          url
          width
          height
        }
        desc {
          raw
        }
      }
    }
  `;
  const { post }: { post: PostWithDescriptionType } = await hygraph.request(
    QUERY,
    { id }
  );
  return post;
}
// This code exports two functions, `getPosts` and `getProjects`, which fetch data from a GraphQL API and return it as arrays of custom data types `PostType` and `ProjectType` respectively. The `noStore` function is used to disable caching for this page because the data is expected to change frequently.