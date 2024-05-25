import { RichTextContent } from "@graphcms/rich-text-types";
import { IconType } from "react-icons";
export type ID = string | number;
export interface PageInfoType {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
    pageSize: number;
}
export interface PostType {
    id: ID;
    title: string;
    topic: string;
    createdAt: string;
    coverImage?: {
        id: ID;
        url: string;
        width: number;
        height: number;
    };
}

export type PostDescriptionType = RichTextContent
export interface SkillType {
    id: ID;
    title: string;
    Icon: IconType;
    theme: string;
}
export interface ExpType {
    id: ID;
    title: string;
    date: string;
    company: string;
    location: string;
    ifLatest?: boolean;
}
export interface FactType {
    id: ID;
    title: string;
    desc: string;
    Icon: IconType;
}
export interface ProjectType {
    id: ID;
    title: string;
    desc: string;
    tech: string[];
    gitUrl: string;
    webUrl?: string;
}
export interface ProjectEdgeType {
    cursor: string;
    node: ProjectType;
}
export interface ProjectConnectionType {
    edges: ProjectEdgeType[];
    pageInfo: PageInfoType;
}
export interface ImageType {
    img: {
        src: string;
        height: number;
        width: number;
    };
    base64: string;
}


// // export type { PostType, SkillType, ExpType, FactType, ProjectType, ImageType, ProjectEdgeType, PageInfoType, ProjectConnectionType }