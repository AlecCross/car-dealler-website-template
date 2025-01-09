import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Form4 from "@/components/Form4/Form4";
import Logos from "@/components/Logos/Logos";

export default function Home() {
  return (
      <div className={styles.home_page}>
        <div className={styles.container}>
          <Logos />
          <Hero />
          <Form4 />
        </div>
      </div>
  );
}
