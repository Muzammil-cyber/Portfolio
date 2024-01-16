"use client";
import {
  Context,
  Dispatch,
  SetStateAction,
  createContext,
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
  const [isDark, setDark] = useState<boolean>(false);



  return (
    <DarkContext.Provider value={{ isDark, setDark }}>
      <body className={`${isDark ? "dark" : ""} flex-col h-screen `}>
        {children}
      </body>
    </DarkContext.Provider>
  );
};

export { DarkContext };

export default DarkMode;
