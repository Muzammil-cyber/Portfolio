"use server";
import { gql } from "graphql-request";
import hygraph from "./headers";
import { PostType, ProjectType } from "@/type/types";

export async function getPosts(): Promise<PostType[]> {
  const QUERY = gql`
    {
      posts {
        desc {
          markdown
        }
        id
        title
        createdAt
        topic
      }
    }
  `;
  const res: any = await hygraph.request(QUERY);

  const posts: PostType[] = res.posts.map((post) => ({
    desc: post.desc.markdown,
    id: post.id,
    title: post.title,
    createdAt: post.createdAt,
    topic: post.topic,
  }));
  return posts;
}

export async function getPorjects(): Promise<ProjectType[]> {
  const QUERY = gql`
    {
      projects {
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
