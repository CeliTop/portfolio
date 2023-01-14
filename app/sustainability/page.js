import styles from "../../styles/Sustainability.module.css";
import utils from "../../styles/utils.module.css";

import ImageCard from "../../components/imageCard";
import Card from "../../components/card";
import YoutubePlayer from "../../components/youtubePlayer";
import Image from "next/image";
import freskResult from "/public/images/sustainability/freskResult.jpg";
import project from "/public/images/sustainability/project.png";

export default function Sustainability() {
  return (
    <div className={utils.page}>
      <div className={utils.sectionTop}>
        <h1 className={utils.sectionTitle}>
          Sustainability & Civic Engagement
        </h1>
        <p>
          ENSEEIHT engineers are aware of sustainable development and assist in
          conferences and activities about this subject, as well as civic
          engagement to have engineers that can be active in society and make
          changes in a positive way
        </p>
      </div>
      <div className={styles.actionList}>
        {actions.map((action, id) => (
          <ImageCard
            key={id}
            title={action.title}
            description={action.description}
            imagePath={`/images/sustainability/${action.imagePath}`}
          />
        ))}
      </div>
      <div className={styles.freskContainer}>
        <Card className={styles.freskResult}>
          <Image
            className={styles.freskImage}
            src={freskResult}
            alt="The climate fresk result"
          />

          <div className={styles.freskDesc}>
            <div>
              <h2 className={styles.learnTitle}>What did I learn ?</h2>
            </div>
            <p>
              During this activity, I have collaborated with other students with
              other points of view, the discussions were interesting and I
              learned a lot of things.
            </p>
            <p>
              I learned new concepts related to climates such as radioactive
              forcing or energy budget.
            </p>
            <p>
              Moreover, I now have a better view of all links between climate
              factors and what to do to limit the consequences of human
              activity.
            </p>
            <p>
              Finally, after the activity, we discussed with other groups about
              the action that can be done right now and actions that ideally
              will be accepted in a utopia. We found a lot of little actions of
              every day that everyone can do.
            </p>
          </div>
        </Card>
      </div>
      <div className={utils.sectionTop}>
        <h1 className={utils.sectionTitle}>
          Civic Engagement project proposal
        </h1>
      </div>
      <div className={styles.projectContent}>
        <div>
          <YoutubePlayer link="https://www.youtube-nocookie.com/embed/C5VLR3IdqC8" />
        </div>
        <Image
          className={styles.projectImage}
          src={project}
          alt="Civic engagement project proposal"
        />
      </div>
    </div>
  );
}

const actions = [
  {
    title: "Sulitest",
    description:
      "Sulitest.org is an organization that provides quiz about sustainable development. Every student at ENSEEIHT pass-through this quiz to make everyone aware of this subject during the climate day. My score on this test is 24/30.",
    imagePath: "sulitest.png",
  },
  {
    title: "The Climate Fresk",
    description:
      "The Climate Fresk is an association that offers the possibility to schools and companies to do a collaborative activity. During this activity, you have to place cards on a fresk, in a causes-consequences order, around climate factors.",
    imagePath: "climateFresk.png",
  },
  {
    title: "French level",
    description:
      "Being a student in a French school, a minimum level of knowledge of the French language is required. This level ensures that one can write independently, including in the professional field, knowing a wide range of possible difficulties.",
    imagePath: "frenchLevel.png",
  },
  {
    title: "Le procès de King-Kong",
    description:
      "To be aware of harassment, sexism and racism, I attended a play where we were judges of the 3 cases we had just attended. We were able to discuss and learn a lot of things, on what the law imposes, on morals ...",
    imagePath: "harassment.png",
  },
];
