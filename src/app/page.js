import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Form4 from "@/components/Form4/Form4";
import Logos from "@/components/Logos/Logos";
import Section1 from "@/components/HomePage/Section1/Section1";
import Section2 from "@/components/HomePage/Section2/Section2";

export default function Home() {
  return (
      <div className={styles.home_page}>
        <div className={styles.container}>
          <Section1 />
          <Section2 />
          <Logos />
          <Hero />
          <Form4 />
        </div>
      </div>
  );
}
