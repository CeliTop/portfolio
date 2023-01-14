import BaseInfos from "./baseInfos";
import Arrow from "../components/arrow";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import Contact from "./contact";

import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <BaseInfos />
      <div className={styles.arrowSection} id="scrollTo">
        <a href="#scrollTo" aria-label="scroll button">
          <Arrow />
        </a>
      </div>
      <FirstSection />
      <SecondSection />
      <footer className={styles.bottom}>
        <div className={`${styles.section} ${styles.contactSection}`}>
          <Contact />
        </div>
        <p>
          Designed and built by Célian DEBÉTHUNE - Technologies used
          <FontAwesomeIcon icon={faHtml5} className={styles.bottomIcons} />
          <FontAwesomeIcon icon={faCss3Alt} className={styles.bottomIcons} />
          <FontAwesomeIcon icon={faJs} className={styles.bottomIcons} />
          <FontAwesomeIcon icon={faReact} className={styles.bottomIcons} />
          Next.js 13
        </p>
      </footer>
    </>
  );
}
