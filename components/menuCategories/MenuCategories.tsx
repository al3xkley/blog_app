import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

export default function MenuCategories() {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=cuisine"
        className={`${styles.categoryItem} ${styles.cuisine}`}
      >
        cuisine
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${styles.categoryItem} ${styles.culture}`}
      >
        culture
      </Link>
      <Link
        href="/blog?cat=architecture"
        className={`${styles.categoryItem} ${styles.architecture}`}
      >
        architeture
      </Link>
      <Link
        href="/blog?cat=people"
        className={`${styles.categoryItem} ${styles.people}`}
      >
        people
      </Link>
      <Link
        href="/blog?cat=history"
        className={`${styles.categoryItem} ${styles.history}`}
      >
        history
      </Link>
      <Link
        href="/blog?cat=sightseeings"
        className={`${styles.categoryItem} ${styles.sights}`}
      >
        sightseeings
      </Link>
    </div>
  );
}
