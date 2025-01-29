import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css";

export type MenuPostsProps = {
  withImage: boolean;
};
export default function MenuPosts({
  withImage,
}: MenuPostsProps): React.ReactElement {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt={""}
              className={styles.image}
              width={80}
              height={80}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.cuisine}`}>
            Cuisine
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit!
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Aleksey Frolov</span>
            <span className={styles.date}> - 28.01.2025</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt={""}
              className={styles.image}
              width={80}
              height={80}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.architecture}`}>
            Architecture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit!
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Aleksey Frolov</span>
            <span className={styles.date}> - 28.01.2025</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt={""}
              className={styles.image}
              width={80}
              height={80}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.people}`}>People</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit!</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Aleksey Frolov</span>
            <span className={styles.date}> - 28.01.2025</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt={""}
              className={styles.image}
              width={80}
              height={80}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.history}`}>
            History
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit!</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Aleksey Frolov</span>
            <span className={styles.date}> - 28.01.2025</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
