"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
export type AuthStatus = "authorized" | "notauthorized";
const status: AuthStatus = "authorized";

export default function AuthLinks() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {status === "notauthorized" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            New Post
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthorized" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">New Post</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
          <div className=""></div>
        </div>
      )}
    </>
  );
}
