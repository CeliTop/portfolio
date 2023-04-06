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
          <LeadershipSection />
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

function LeadershipSection() {
  return (
    <div className={styles.leadershipSection}>
      <h2 className={styles.leadershipTitle}>Leadership</h2>
      <p className={styles.leadershipDescription}>
        {
          "In connection with the 'leadership' courses taught at school, I interviewed a person who had responsibilities and had to take care of a team. It was very interesting. I learned about his style of leadership, which is rather relaxed and encouraging to his colleagues, and then he explained to me why other styles can be appropriate for other people. He also taught me that you are not necessarily a leader from birth but that with hard work and confidence it is possible to progress. He also told me about the tools that are used to distribute tasks on projects (Trello for example), which allows him to better evaluate the performance of his team and to identify problems quickly before they become a problem."
        }
      </p>
      <div className={styles.questions}>
        {questions.map((question, id) => (
          <div key={id} className={styles.questionDiv}>
            <p className={styles.question}>{question.question}</p>
            <p className={styles.questionAnswer}>{question.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const questions = [
  {
    question:
      "What are the responsibilities of a team leader towards their team and their superiors?",
    answer:
      "A team leader's primary responsibility is to support and motivate team members to improve their performance. They also need to communicate regularly with their superiors, providing updates on the team's progress.",
  },
  {
    question: "How do you address non-performance issues within your team?",
    answer:
      "I acknowledge the issue and work with the team to identify the cause of non-performance, suggest ways to improve and provide feedback to team members who are not meeting expectations.",
  },
  {
    question: "How do you manage conflicts within your team?",
    answer:
      "Conflicts is not a frequent issue in my team. When conflicts arise, I encourage team members to communicate with each other and express their viewpoints. I then ask them to suggest commitments to prevent similar issues in the future.",
  },
  {
    question:
      "Can you describe your leadership style and approach to leading a team?",
    answer:
      "I am clear with my team, we talk a lot, so that everyone knows what to do, why to do it.",
  },
  {
    question:
      "What performance metrics do you use to measure your team's success?",
    answer:
      "For each project the methods change. We use known methods such as agile methods for example.",
  },
  {
    question: "How do you define success within a team?",
    answer:
      "A successful team is one where members willingly offer assistance to each other and work collaboratively, even beyond their assigned duties.",
  },
  {
    question: "What mistakes have you made as a team leader?",
    answer:
      "I initially micromanaged team members' work and was overly demanding, undervaluing the importance of recognizing and rewarding effective work.",
  },
  {
    question: "What do you find the most difficult?",
    answer:
      "One difficult thing is to manage team members who don't work as a team. It is difficult to communicate with them and to make them exchange with other members.",
  },
  {
    question:
      "What advice would you give to someone who aspires to be a team leader?",
    answer:
      "Listening to the team so that everyone feels concerned and useful to the projects, and to be more responsive when problems arise.",
  },
];
