import React from "react";
import styles from "./featured.module.css";

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {" "}
        <b>Hey, there!</b> Discover my Balkan Experience
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <img className={styles.image} src="/000045.JPG" alt="title-image" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            doloremque minus atque, similique culpa quidem ducimus ad ipsa fugit
            labore. Modi rem iusto temporibus quasi dicta quae maxime
            repudiandae nemo?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}
