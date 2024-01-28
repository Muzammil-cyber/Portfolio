import dynamic from "next/dynamic";
import Experience from "./more/experience";
import { SkillLoading } from "./more/skill/loading";

const SkillDynamic = dynamic(() => import("./more/skills"), {
  loading: () => <SkillLoading />,
  ssr: false,
});

export default function More() {
  return (
    <section className="flex flex-col sm:flex-row w-full py-8 gap-4">
      <SkillDynamic />
      {/* <Skills /> */}
      <Experience />
    </section>
  );
}
