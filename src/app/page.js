import styles from "./page.module.css";
import Logos from "@/components/Logos/Logos";
import Section1 from "@/components/HomePage/Section1/Section1";
import Section2 from "@/components/HomePage/Section2/Section2";
import Section3 from "@/components/HomePage/Section3/Section3";
import Section4 from "@/components/HomePage/Section4/Section4";
import Section5 from "@/components/HomePage/Section5/Section5";
import Section6 from "@/components/HomePage/Section6/Section6";
import Section1About from "@/components/AboutUS/Section1/Section1-About";

export default function Home() {
  return (
    <div className={styles.home_page}>
      <Section1 />
      <Logos />
      <Section2 />
      <Logos />
      <Section3 />
      <Logos />ё
      <Section4 />
      <Logos />
      <Section5 />
      <Logos />
      <Section6 />
      <Section1About />
    </div>
  );
}
