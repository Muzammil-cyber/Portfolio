"use client";
import {
  Context,
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

let DarkContext: Context<{
  isDark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}> = createContext<{
  isDark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}>({ isDark: false, setDark: () => {} });

const DarkMode = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedIsDark = JSON.parse(
        window.localStorage.getItem("color-theme")
      );
      setIsDark(storedIsDark || false);
    }
  }, []);

  // useEffect(() => {
  //   // Update localStorage only when isDark changes (client-side)
  //   if (typeof window !== "undefined") {
  //     window.localStorage.setItem("color-theme", JSON.stringify(isDark));
  //   }
  // }, [isDark]);

  const setDark = (v: boolean) => {
    setIsDark(v);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("color-theme", JSON.stringify(v));
    }
  };

  return (
    <DarkContext.Provider value={{ isDark, setDark }}>
      <body className={`${isDark && "dark"} flex-col h-screen `}>
        {children}
      </body>
    </DarkContext.Provider>
  );
};

export { DarkContext };

export default DarkMode;
