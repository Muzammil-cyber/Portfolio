import { IconType } from "react-icons";

type ID = string | number
interface PostType {
    id: ID,
    title: string,
    desc: string,
    topic: string,
    date: string,
}

interface SkillType {
    id: ID,
    title: string,
    Icon: IconType,
    theme: string
}

interface ExpType {
    id: ID,
    title: string,
    date: string,
    company: string,
    location: string,
    ifLatest?: boolean
}

interface FactType {
    id: ID,
    title: string,
    desc: string,
    Icon: IconType

}

export type { PostType, SkillType, ExpType, FactType }