import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import Thememode from "../ui/themetoggle/Thememode";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/tiktok.png" alt={"TikTok"} width={24} height={24} />
        <Image src="/telegram.png" alt={"Telegram"} width={24} height={24} />
        <Image src="/youtube.png" alt={"YouTube"} width={24} height={24} />
      </div>
      <div className={styles.logo}>Balkans for Beginners!</div>

      <div className={styles.links}>
        <Thememode />
        <Link href="/">Home Page</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About Page</Link>
        <Link href="/">Login</Link>
      </div>
    </div>
  );
}
