import Card from "../../components/card";
import DownloadCV from "../../components/downloadCV";
import styles from "../../styles/Career.module.css";
import Image from "next/image";
import interviewImage from "/public/images/interview.png";

export default function Career() {
  return (
    <div className={styles.page}>
      <Card className={styles.titleCard}>
        <h1>Career Development</h1>
        <p>
          ENSEEIHT supports students in their professional career and encourages
          them to develop their network of professionals
        </p>
        <DownloadCV dark />
      </Card>
      <div className={styles.interviewSection}>
        <div className={styles.interviewTop}>
          <h3 className={styles.interviewTitle}>Job Interview</h3>
          <p className={styles.interviewSubtitle}>
            In order to better understand the professional world and better
            understand the areas that interest me, I conducted an interview with
            a professional.
          </p>
        </div>
        <Card dark className={styles.interview}>
          <Message />
          <Image
            className={styles.interviewImage}
            src={interviewImage}
            alt="report of the interview"
          />
          <Thanks />
        </Card>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className={styles.message}>
      <div className={styles.text}>
        <p>Hello Olivier,</p>
        <p>
          My name is Célian and I am a student in the first year of the
          engineering cycle at ENSEEIHT, in the digital sciences department.
        </p>

        <p>
          So I still have very little knowledge of the professional world, but a
          definite attraction for the world of security. I started learning
          cybersecurity basics over the summer vacation at sites like TryHackMe,
          and discovered a whole bunch of IT.
        </p>

        <p>
          This is why I take the liberty of contacting you. Your experience of
          over 11 years at Natixis would allow me to better understand the
          professional world, that of cybersecurity. More particularly, banking
          cybersecurity intrigues me because, having little information on this
          subject, remains an area to be explored. An exchange would therefore
          be very constructive for me and to make the right choice of
          specialization in the future.
        </p>
        <p>
          Hope to get a positive response from you. I am at your disposal to
          find a date that suits us.
        </p>
        <p>Goodbye,</p>
        <p>Célian</p>
      </div>
    </div>
  );
}

function Thanks() {
  return (
    <div className={styles.thanks}>
      <div className={styles.text}>
        <p>Dear Olivier,</p>

        <p>
          Thanks again for your time. Our exchange confirms me in the choice of
          my future specialty, as well as that of the sector.
        </p>
        <p>Best regards,</p>
        <p>Celian</p>
      </div>
    </div>
  );
}
