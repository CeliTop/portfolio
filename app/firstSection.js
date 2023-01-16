import styles from "../styles/Home.module.css";
import Card from "../components/card.js";
import YoutubePlayer from "../components/youtubePlayer";

export default function FirstSection() {
  return (
    <section className={styles.lightSection}>
      <div className={`${styles.section} ${styles.firstSection}`}>
        <WhoAmI />
        <LikeWebsite />
        <Studies />
      </div>
      <div className={`${styles.videoSection}`}>
        <PresentationVideo />
      </div>
    </section>
  );
}

function Studies() {
  return (
    <div className={styles.studies}>
      <p className={styles.sectionTitle}>Studies ?</p>
      <Card dark>
        <p className={styles.sectionSubtitle}>My educations and diplomas</p>
        <div className={styles.schools}>
          {schools.map((school) => (
            <SchoolInfos
              key={school.id}
              time={school.time}
              school={school.school}
              subject={school.subject}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

function SchoolInfos({ time, school, subject }) {
  return (
    <div className={styles.schoolInfo}>
      <p className={styles.time}>{time}</p>
      <p className={styles.school}>{school}</p>
      <p className={styles.subject}>{subject}</p>
    </div>
  );
}

const schools = [
  {
    id: "1",
    time: "2021-2024",
    school: "ENSEEIHT – Toulouse, France",
    subject: "Computer Engineer",
  },
  {
    id: "2",
    time: "August - December 2022",
    school: "University of Stavanger - Norway",
    subject: "Semester abroad",
  },
  {
    id: "3",
    time: "2019-2021",
    school: "Lycée Malherbe – Caen, France",
    subject: "Classe Préparatoire MP",
  },
  {
    id: "4",
    time: "2016-2019",
    school: "Lycée polyvalent Guillaume le Conquérant – Falaise, France",
    subject: "High School Diploma (With Honors)",
  },
];

function WhoAmI() {
  return (
    <div className={styles.whoAmI}>
      <p className={styles.sectionTitle}>Who am I ?</p>
      <Card dark>
        <p className={styles.sectionSubtitle}>A passionate</p>
        <p className={styles.response}>
          Computing is such a vast and constantly evolving field that one cannot
          explore all of its possibilities.
        </p>
        <p className={styles.response}>
          This is how since my childhood I have traveled this jungle, going from
          the discovery of programming to the development of small games,
          including animation and 3D modeling.
        </p>
        <p className={styles.response}>
          I am passionate and determined, always looking for new skills and
          areas to apply them.
        </p>
      </Card>
    </div>
  );
}

function LikeWebsite() {
  return (
    <div className={`${styles.likeWebsite}`}>
      <p className={styles.sectionTitle}>Do you like this website ?</p>
      <p className={styles.description}>
        {
          "If you like the design of this page, or want to know how it's made, you can "
        }
        <a
          href="https://github.com/CeliTop/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          {"go to the Github page of this project. "}
        </a>
        You can even take inspiration from it and fork the repository, but
        please give me proper credit by linking back to my website.
      </p>
    </div>
  );
}

function PresentationVideo() {
  return (
    <div className={styles.section}>
      <p className={styles.sectionTitle}>Presentation Video</p>
      <YoutubePlayer id="YVIdXFci114" />
    </div>
  );
}
