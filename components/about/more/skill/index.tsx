"use client";

import { SkillType } from "@/type/types";
import { useAnimate } from "framer-motion";
import { useState, useEffect } from "react";

function useListAnimate(isHover: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isHover) {
      animate("span", { opacity: 1, scale: 1, rotate: -45 });
    } else {
      animate("span", { opacity: 0, scale: 0.5, rotate: 0 });
    }
  }, [isHover]);

  return scope;
}

export default function Skill({ title, Icon, theme }: Omit<SkillType, "id">) {
  const [isHover, setHover] = useState<boolean>(false);
  const scope = useListAnimate(isHover);

  const [color, size] = theme.split(" ");

  return (
    <li
      className={`skill rounded-xl h-12 w-12 ${color} relative flex items-center justify-center`}
      ref={scope}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <span className="rounded-lg text-white bg-slate-950 px-1 py-1 text-xs  absolute -top-2 -left-4 opacity-0">
        {title}
      </span>
      <Icon className={`fill-white  ${size ? size : "text-xl"}`} />
    </li>
  );
}
