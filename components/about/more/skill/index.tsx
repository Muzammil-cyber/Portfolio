"use client";

import { SkillType } from "@/type/types";
import { useAnimate } from "motion/react";
import { useState, useEffect } from "react";

function useListAnimate(isHover: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isHover) {
      animate("span", { opacity: 1, scale: 1, rotate: -45 });
    } else {
      animate("span", { opacity: 0, scale: 0.5, rotate: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHover]);

  return scope;
}

export default function Skill({ title, Icon, theme }: Omit<SkillType, "id">) {
  const [isHover, setHover] = useState<boolean>(false);
  const scope = useListAnimate(isHover);

  const [color, size] = theme.split(" ");

  return (
    <li
      className={`skill h-12 w-12 rounded-xl ${color} relative flex items-center justify-center text-black`}
      ref={scope}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <span className="absolute -left-4 -top-2 rounded-lg bg-secondary-950 px-1 py-1 text-xs text-white opacity-0">
        {title}
      </span>
      <Icon className={`fill-white ${size ? size : "text-xl"}`} />
    </li>
  );
}
