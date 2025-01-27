import Link from "next/link";
import React from "react";
import styles from "./authLinks.module.css";

export default function AuthLInks() {
  const status = "not authorized";
  return (
    <>
      {status === "not authorized" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/logout">Create New Post</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
}
