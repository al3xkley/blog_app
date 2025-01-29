import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.image}
          src="/000045.JPG"
          alt="img"
          width={400}
          height={350}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>29.01.2025 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="">
          <h1>This is Post Title!</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
          facilisis massa, vel pulvinar justo vulputate at. Nulla facilisi.
        </p>
        <Link className={styles.link} href={""}>
          Read More
        </Link>
      </div>
    </div>
  );
}
