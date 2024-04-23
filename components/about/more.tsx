import Experience from "./more/experience";
import { SkillLoading } from "./more/skill/loading";
import { Suspense } from "react";

import Skills from "./more/skills";

export const SkillLoadings = () => {
  return (
    <>
      <SkillLoading />
      <SkillLoading />
      <SkillLoading />
      <SkillLoading />
      <SkillLoading />
      <SkillLoading />
      <SkillLoading />
      <SkillLoading />
    </>
  );
};

export default function More() {
  return (
    <section className="flex flex-col sm:flex-row w-full py-8 gap-4">
      <Suspense fallback={<SkillLoadings />}>
        <Skills />
      </Suspense>

      <Experience />
    </section>
  );
}
