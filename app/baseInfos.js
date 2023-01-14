import styles from "../styles/Home.module.css";
import Card from "../components/card.js";

import Image from "next/image";
import profilePic from "/public/images/profile-picture.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import DownloadCV from "../components/downloadCV";

export default function BaseInfos() {
  return (
    <section className={styles.presentation}>
      <div className={styles.left}>
        <h3 className={styles.greetings}>{"Hello there,"}</h3>
        <h1 className={styles.title}>{"I'm Célian DEBÉTHUNE"}</h1>
        <h2 className={styles.student}>
          {"A french computer engineering student"}
        </h2>
        <DownloadCV />
      </div>
      <div className={styles.right}>
        <Card>
          <div className={styles.cardContent}>
            <Image
              className={styles.profilePicture}
              src={profilePic}
              alt="Picture of Célian DEBETHUNE"
              priority
            />
            <h2 className={styles.name}>Célian DEBÉTHUNE</h2>
            <div className={styles.info}>
              <FontAwesomeIcon icon={faSchool} className={styles.icon} />
              <p>
                {"Student at "}
                <a
                  href="https://www.enseeiht.fr/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ENSEEIHT
                </a>
              </p>
            </div>
            <div className={styles.info}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <p>{"Toulouse, France 🇫🇷"}</p>
            </div>
            <div className={styles.info}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <p>
                <a href="mailto:celian.debethune@gmail.com">
                  celian.debethune@gmail.com
                </a>
              </p>
            </div>
            <div className={styles.info}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <p>(+33)6 69 95 79 59</p>
            </div>

            <div className={styles.social}>
              <a
                href="https://www.linkedin.com/in/debethune-celian/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.socialIcon}
                />
              </a>
              <a
                href="https://github.com/CeliTop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
