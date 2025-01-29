import React from "react";
import styles from "./cardlist.module.css";
import Card from "../card/Card";
import Pagination from "../ui/pagination/pagination/Pagination";

export default function Cardlist() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Pagination />
      </div>
    </div>
  );
}
