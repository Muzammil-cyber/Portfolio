"use client";
import React, { useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./toggler.css";
import { LuMoon, LuSun } from "react-icons/lu";
import { DarkContext } from "@/context/DarkMode";
const ThemeToggler = () => {
  const { isDark, setDark } = useContext(DarkContext);

  return (
    <div
      id="themeToggler"
      className="container"
      data-darkmode={isDark}
      onClick={() => setDark(!isDark)}
      style={{ justifyContent: isDark ? "flex-end" : "flex-start" }}
    >
      <motion.div layout className="handle">
        <AnimatePresence mode="wait" initial={false}>
          <motion.i
            className={`icon`}
            key={isDark ? "moon" : "sun"}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <LuMoon /> : <LuSun />}
          </motion.i>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ThemeToggler;
