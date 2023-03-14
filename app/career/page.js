import Card from "../../components/card";
import Download from "../../components/download";
import styles from "../../styles/Career.module.css";
import utils from "../../styles/utils.module.css";
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
        <Download
          dark
          text="Download my CV"
          filePath="/files/CV DEBETHUNE Célian.pdf"
        />
      </Card>
      <main>
        <div className={styles.interviewSection}>
          <div className={styles.interviewTop}>
            <h2 className={styles.interviewTitle}>Job Interviews</h2>
            <p className={styles.interviewSubtitle}>
              In order to better understand the professional world and better
              understand the areas that interest me, I conducted an interview
              with professionals.
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
          <div className={styles.leadershipSection}>
            <h2 className={styles.leadershipTitle}>Leadership</h2>
            <p className={styles.leadershipDescription}>
              {
                "In connection with the 'leadership' courses taught at school, I interviewed a person who had responsibilities and had to take care of a team. It was very interesting. I learned about his style of leadership, which is rather relaxed and encouraging to his colleagues, and then he explained to me why other styles can be appropriate for other people. He also taught me that you are not necessarily a leader from birth but that with hard work and confidence it is possible to progress. He also told me about the tools that are used to distribute tasks on projects (Trello for example), which allows him to better evaluate the performance of his team and to identify problems quickly before they become a problem."
              }
            </p>
          </div>
        </div>
        <div className={styles.internship}>
          <div className={utils.sectionTop}>
            <h1 className={utils.sectionTitle}>Internship</h1>
            <p>
              After each year of study of my engineering cycle, an internship in
              a company must be carried out. Below are my reports of the
              different internships I have done.
            </p>
          </div>
          <div className={styles.reports}>
            <Download
              text="1st year report"
              filePath="/files/internshipReport1A.pdf"
            />
          </div>
        </div>
      </main>
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
