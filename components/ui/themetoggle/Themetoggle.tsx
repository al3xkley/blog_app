"use client";

import React from "react";
import Image from "next/image";
import styles from "./themetoggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function Thememode() {
  const context = useContext(ThemeContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { theme, toggle } = context;

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { background: "white" } : { background: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
}
