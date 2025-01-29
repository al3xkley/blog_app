import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            className={styles.logoImg}
            src="/blknblog.png"
            alt="balkanblog"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>Balkans For Beginners</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vero
          ab error, fugiat aperiam, velit quos eaque laudantium, impedit
          molestiae distinctio sit sequi cum facilis exercitationem quisquam
          aspernatur iusto quo.
        </p>
        <div className={styles.icons}>
          <Image src="/tiktok.png" alt={"TikTok"} width={18} height={18} />
          <Image src="/telegram.png" alt={"Telegram"} width={18} height={18} />
          <Image src="/youtube.png" alt={"YouTube"} width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">History</Link>
          <Link href="/">Architecture</Link>
          <Link href="/">Cuisine</Link>
          <Link href="/">People</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Telegram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">YouTube</Link>
        </div>
      </div>
    </div>
  );
}
