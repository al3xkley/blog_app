"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContextProviderProps } from "@/context/ThemeContext";

export const ThemeProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const context = useContext(ThemeContext);

  if (!context) {
    return <div>Loading...</div>;
  }
  const { theme } = context;
  const [mounted, setMounted] = useState<Boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [theme]);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};
