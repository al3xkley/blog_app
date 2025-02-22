import Link from "next/link";
import Image from "next/image";
import styles from "./comments.module.css";

import React from "react";

export default function Comments() {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.writeComment}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Submit</button>
        </div>
      ) : (
        <Link href="/login"> Login to write a comment...</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.avatar}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 01.01.2024</span>
            </div>
          </div>
          <p className={styles.commentText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae at voluptatum in repellat? Harum, nemo, vero impedit
            eius ipsa soluta quae quod facilis dolorem quisquam saepe in dolorum
            optio molestias.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.avatar}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 01.01.2024</span>
            </div>
          </div>
          <p className={styles.commentText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae at voluptatum in repellat? Harum, nemo, vero impedit
            eius ipsa soluta quae quod facilis dolorem quisquam saepe in dolorum
            optio molestias.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.avatar}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 01.01.2024</span>
            </div>
          </div>
          <p className={styles.commentText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae at voluptatum in repellat? Harum, nemo, vero impedit
            eius ipsa soluta quae quod facilis dolorem quisquam saepe in dolorum
            optio molestias.
          </p>
        </div>
      </div>
    </div>
  );
}
