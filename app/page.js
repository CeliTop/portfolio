import BaseInfos from "./baseInfos";
import Arrow from "../components/arrow";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import Contact from "./contact";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <BaseInfos />
      <div className={styles.arrowSection} id="scrollTo">
        <a href="#scrollTo">
          <Arrow />
        </a>
      </div>
      <FirstSection />
      <SecondSection />
      <footer className={styles.bottom}>
        <div className={`${styles.section} ${styles.contactSection}`}>
          <Contact />
        </div>
        <p>Designed and built by Célian DEBÉTHUNE</p>
      </footer>
    </>
  );
}
