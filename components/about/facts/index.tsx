import { FactData } from "./data";
import { FactType } from "@/type/types";

function Fact({ Icon, title, desc }: Omit<FactType, "id">) {
  return (
    <li className="border border-indigo-900 dark:border-black bg-white dark:bg-gray-900 rounded-md p-4 w-full sm:w-1/3 text-left space-y-3">
      <Icon className="text-5xl" />
      <h4 className="text-left text-xl font-extrabold dark:text-white">
        {title}
      </h4>
      <p className="dark:text-slate-400">{desc}</p>
    </li>
  );
}

export default function Facts() {
  return (
    <section className="h-fit w-full ">
      <h3 className="text-left text-3xl font-bold mb-3">Intriguing Facts</h3>
      <ul className="flex flex-col sm:flex-row w-full gap-4">
        {FactData.map((fact) => (
          <Fact
            key={fact.id}
            title={fact.title}
            desc={fact.desc}
            Icon={fact.Icon}
          />
        ))}
      </ul>
    </section>
  );
}
