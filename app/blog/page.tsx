import React from "react";
import styles from "./blog.module.css";
import Cardlist from "@/components/cardlist/Cardlist";
import Menu from "@/components/menu/Menu";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Architecture Blog</h1>
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  );
}
