import React from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Categorylist() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            alt="cuisine"
            width={32}
            height={32}
            className={styles.image}
          />
          cuisine
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/balkanculture.png"
            alt="culture"
            width={32}
            height={32}
            className={styles.image}
          />
          culture
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.architecture}`}
        >
          <Image
            src="/arch.png"
            alt="archimg"
            width={32}
            height={32}
            className={styles.image}
          />
          architeture
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.people}`}
        >
          <Image
            src="/people.png"
            alt="people"
            width={32}
            height={32}
            className={styles.image}
          />
          people
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.history}`}
        >
          <Image
            src="/history.png"
            alt="history"
            width={32}
            height={32}
            className={styles.image}
          />
          history
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.sights}`}
        >
          <Image
            src="/sights.png"
            alt="sights"
            width={32}
            height={32}
            className={styles.image}
          />
          sightseeings
        </Link>
      </div>
    </div>
  );
}
