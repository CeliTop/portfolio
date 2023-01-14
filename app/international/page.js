import styles from "../../styles/Mobility.module.css";
import utils from "../../styles/utils.module.css";

import Card from "../../components/card";
import Image from "next/image";
import stavangerImage from "/public/images/stavanger.png";
import minutes1 from "/public/images/minutes1.png";
import minutes2 from "/public/images/minutes2.png";

export default function Mobility() {
  return (
    <div className={utils.page}>
      <div className={styles.mobility}>
        <div className={utils.sectionTop}>
          <h1 className={utils.sectionTitle}>International Mobility</h1>
          <p>
            All ENSEEIHT students must do a mobility abroad. This is possible
            thanks to internships, semesters abroad, or a double degree ...
          </p>
        </div>
        <Card className={styles.semester}>
          <div>
            <Image
              className={styles.image}
              src={stavangerImage}
              alt="Stavanger landscape"
              priority
            />
          </div>
          <div>
            <h2 className={styles.semesterTitle}>Semester Abroad</h2>

            <p className={styles.semesterDesc}>
              From August to December 2022, I spent a semester in Norway, at the
              University of Stavanger, one of the largest Norwegian
              universities, in a superb city. I took advantage of this period to
              discover new working methods, new cultures, to exchange, and to
              walk around this region of the world.
            </p>
          </div>
        </Card>
      </div>
      <div className={styles.profEnglish}>
        <div className={utils.sectionTop}>
          <h2 className={`${styles.peTitle} ${utils.sectionTitle}`}>
            Professional English
          </h2>
          <p>
            During the P.E classes, I had the opportunity to chair a meeting. It
            was a role play where you choose the topic of the meeting and where
            everyone reacts. So I chose that I was CEO of the company Levono (an
            obvious copy of Lenovo) and that we had a meeting to choose where
            the company should develop. It was fun and rewarding to be able to
            practice my English in different situations than usual.
          </p>
        </div>
        <div className={styles.peImages}>
          <Image
            className={styles.image}
            src={minutes1}
            alt="minutes first page"
          />
          <Image
            className={styles.image}
            src={minutes2}
            alt="minutes second page"
          />
        </div>
      </div>
    </div>
  );
}
