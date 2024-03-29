import { FaCss3, FaGitAlt, FaHtml5, FaJava, FaNode, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiJavascript, SiMongodb, SiTailwindcss, SiChakraui, SiPostgresql, SiFramer } from "react-icons/si";
import { SkillType } from "@/type/types";

export const SkillSet: SkillType[] = [
    {
        id: 1,
        title: "HTML",
        Icon: FaHtml5,
        theme: "bg-orange-600"
    },
    {
        id: 2,
        title: 'CSS',
        Icon: FaCss3,
        theme: "bg-blue-400"

    },
    {
        id: 3,
        title: 'Javascript',
        Icon: SiJavascript,
        theme: "bg-yellow-400"

    },
    {
        id: 4,
        title: 'Typescript',
        Icon: SiTypescript,
        theme: "bg-blue-500"

    },
    {
        id: 5,
        title: 'Reactjs',
        Icon: FaReact,
        theme: "bg-sky-500"

    },
    {
        id: 6,
        title: 'Nextjs',
        Icon: TbBrandNextjs,
        theme: "bg-black !text-3xl"

    },
    {
        id: 7,
        title: 'Nodejs',
        Icon: FaNode,
        theme: "bg-green-400 !text-3xl"

    },
    {
        id: 9,
        title: 'MongoDB',
        Icon: SiMongodb,
        theme: "bg-green-500"

    },
    {
        id: 19,
        title: 'SQL',
        Icon: SiPostgresql,
        theme: "bg-red-500 !text-2xl bg-cyan-700"

    },
    {
        id: 16,
        title: 'Tailwind',
        Icon: SiTailwindcss,
        theme: "bg-cyan-500"

    },
    {
        id: 17,
        title: 'ChakraUI',
        Icon: SiChakraui,
        theme: "bg-cyan-300"

    },
    {
        id: 20,
        title: 'Framer-motion',
        Icon: SiFramer,
        theme: "bg-blue-800"

    },
    {
        id: 10,
        title: 'Git',
        Icon: FaGitAlt,
        theme: "bg-orange-500 !text-3xl"

    },

];