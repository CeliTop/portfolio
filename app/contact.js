import styles from "../styles/Home.module.css";
import Card from "../components/card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Download from "../components/download";

export default function Contact() {
  return (
    <Card>
      <div className={styles.contactMe}>
        <div className={styles.left}>
          <p className={styles.sectionSubtitle}>Feel free to contact me</p>
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
              <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
            </a>
            <Download
              dark
              text="Download my CV"
              filePath="/files/CV DEBETHUNE Célian.pdf"
            />
          </div>
        </div>
        <div className={styles.right}>
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
        </div>
      </div>
    </Card>
  );
}
