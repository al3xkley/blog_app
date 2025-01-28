"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

export type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // Возвращаем значение по умолчанию если в окружении не браузер
};

export type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(getFromLocalStorage);
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // Сохраняем тему в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
