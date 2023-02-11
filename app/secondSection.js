import styles from "../styles/Home.module.css";
import Card from "../components/card";
import Tag from "../components/tag";
import Email from "./email";

export default function SecondSection() {
  return (
    <section className={`${styles.section} ${styles.skillsInterests}`}>
      <Skills />
      <Interests />
      <SeeMore />
      <Email />
    </section>
  );
}

function Skills() {
  return (
    <div className={styles.skills}>
      <p className={styles.sectionTitle}>Skills</p>
      <Card>
        <p className={styles.sectionSubtitle}>What I can do</p>
        <ul>
          {Object.keys(skills).map((category, id) => (
            <li key={id}>
              <div>
                <p className={styles.skillCategory}>{category}</p>
                <ul>
                  {skills[category].map((skill, skillId) => (
                    <Tag
                      text={skill.skill}
                      colorClass={skill.color}
                      keyProps={`${id}${skillId}`}
                      key={`${id}${skillId}`}
                    />
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

function Interests() {
  return (
    <div className={styles.interests}>
      <p className={styles.sectionTitle}>Interests</p>
      <Card>
        <p className={styles.sectionSubtitle}>What I like to do</p>
        <ul>
          {interests.map((interest, id) => (
            <Tag
              text={interest.text}
              colorClass={interest.color}
              keyProps={id}
              key={id}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
}

function SeeMore() {
  return (
    <div className={styles.seeMore}>
      <p className={styles.sectionTitle}>Want to see more ?</p>
      <p className={styles.description}>
        If you want to see more, to know me better, I let you explore the rest
        of this website or explore my work on github.
      </p>
    </div>
  );
}

const skills = {
  Frontend: [
    { skill: "HTML", color: "orange" },
    { skill: "CSS", color: "blue" },
    { skill: "Javascript", color: "yellow" },
    { skill: "React", color: "blue" },
    { skill: "Tailwind", color: "cyan" },
    { skill: "Next.js", color: "black" },
  ],
  "Software Developpement": [
    { skill: "Java", color: "red" },
    { skill: "Flutter", color: "blue" },
  ],
  "Big data - IA": [
    { skill: "Python", color: "yellow" },
    { skill: "R", color: "darkBlue" },
    { skill: "Matlab", color: "red" },
  ],
  "Game developpement": [
    { skill: "Blender", color: "orange" },
    { skill: "Unity", color: "black" },
  ],
  "CyberSecurity - Computer Science": [
    { skill: "Assembly", color: "red" },
    ,
    { skill: "Network protocols", color: "yellow" },
    { skill: "OSI model", color: "cyan" },
    ,
  ],
};

const interests = [
  { text: "Music", color: "red" },
  { text: "Guitar", color: "blue" },
  { text: "Film and series", color: "orange" },
  { text: "Game developpement", color: "cyan" },
  { text: "3D Modelling", color: "black" },
  { text: "Competitive Games", color: "yellow" },
];
