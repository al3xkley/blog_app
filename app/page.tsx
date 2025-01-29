import Image from "next/image";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Categorylist from "@/components/categorylist/Categorylist";
import Cardlist from "@/components/cardlist/Cardlist";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Categorylist />
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  );
}
