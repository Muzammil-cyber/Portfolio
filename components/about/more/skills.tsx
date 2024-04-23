"use client";

import Skill from "./skill";
import { SkillSet } from "./skill/data";

export default function Skills() {
  return (
    <article className="sm:w-1/2 text-left">
      <h3 className="text-3xl font-bold mb-3">Skills</h3>
      <p className="font-medium mb-6">
        All the technologies I feel comfortable with ⚙️
      </p>
      <ul className="flex flex-wrap gap-2 w-full">
        {SkillSet.map((skill) => (
          <Skill key={"skill-" + skill.id} {...skill} />
        ))}
      </ul>
    </article>
  );
}
