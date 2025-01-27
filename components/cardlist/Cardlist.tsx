import React from "react";
import styles from "./cardlist.module.css";
import Pagination from "../pagination/Pagination";

export default function Cardlist() {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
}
