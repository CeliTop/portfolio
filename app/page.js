import styles from "../styles/Home.module.css";
import utils from "../styles/utils.module.css";

import Image from "next/image";
import profilePic from "../public/images/profile-picture.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.presentation}>
      <div className={styles.left}>
        <h3>{"Hello there,"}</h3>
        <h1>{"I'm Célian DEBÉTHUNE"}</h1>
        <h2>{"A computer engineering student in France"}</h2>
      </div>
      <div className={`${utils.card} ${styles.right}`}>
        <Image
          className={styles.profilePicture}
          src={profilePic}
          alt="Picture of Célian DEBETHUNE"
        />
        <h2>Célian DEBÉTHUNE</h2>
        <p>
          <FontAwesomeIcon icon={faSchool} className={styles.icon} />
          Student at ENSEEIHT
        </p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          Toulouse, France 🇫🇷
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          celian.debethune@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          (+33)6 69 95 79 59
        </p>
      </div>
    </div>
  );
}
