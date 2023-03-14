import styles from "../../styles/Sustainability.module.css";
import utils from "../../styles/utils.module.css";

import ImageCard from "../../components/imageCard";
import Card from "../../components/card";
import YoutubePlayer from "../../components/youtubePlayer";
import CardList from "../../components/cardList";
import Image from "next/image";
import climateFreskResult from "/public/images/sustainability/climateFreskResult.jpg";
import diversityFreskResult from "/public/images/sustainability/diversityFreskResult.jpg";
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
      <CardList list={actions} />
      <div className={styles.freskContainer}>
        <Card className={styles.freskResult}>
          <Image
            className={styles.freskImage}
            src={climateFreskResult}
            alt="The climate fresk result"
          />
          <div className={styles.freskRight}>
            <div className={styles.freskDesc}>
              <div>
                <h2 className={styles.learnTitle}>What did I learn ?</h2>
              </div>
              <p>
                During these activities, I collaborated with other students with
                other points of view, the discussions were interesting and I
                learned a lot.
              </p>
              <p>
                I learned new concepts related to climates such as radioactive
                forcing or energy balance. I was also able to put words on known
                or new concepts.
              </p>
              <p>
                In addition, I now have a better vision of all the links between
                climatic factors and what to do to limit the consequences of
                human activity, as well as how to be fairer and avoid being
                trapped by cognitive biases.
              </p>
              <p>
                Finally, after the activities, we discussed with other groups
                what action can be done now and what actions will ideally be
                accepted in a utopia. {"We've"} found lots of little everyday
                actions that anyone can do.
              </p>
            </div>
            <Image
              className={styles.diversityFreskImage}
              src={diversityFreskResult}
              alt="The climate fresk result"
            />
          </div>
        </Card>
      </div>
      <div className={utils.sectionTop}>
        <h1 className={utils.sectionTitle}>
          Civic Engagement project proposal
        </h1>
      </div>
      <div className={styles.projectContent}>
        <YoutubePlayer id="C5VLR3IdqC8" />
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
    imagePath: "/images/sustainability/sulitest.png",
  },
  {
    title: "The Climate Fresk",
    description:
      "The Climate Fresk is an association that offers the possibility to schools and companies to do a collaborative activity. During this activity, you have to place cards on a fresk, in a causes-consequences order, around climate factors.",
    imagePath: "/images/sustainability/climateFresk.png",
  },
  {
    title: "The Diversity Fresk",
    description:
      "Similar to The Climate Fresk it is a collaborative activity. It's the same principle of cards to be placed in a logical order, but on the theme of diversity, cognitive biases, how our brains work and what that entails.",
    imagePath: "/images/sustainability/diversityFresk.png",
  },
  {
    title: "French level",
    description:
      "Being a student in a French school, a minimum level of knowledge of the French language is required. This level ensures that one can write independently, including in the professional field, knowing a wide range of possible difficulties.",
    imagePath: "/images/sustainability/frenchLevel.png",
  },
  {
    title: "Le procès de King-Kong",
    description:
      "To be aware of harassment, sexism and racism, I attended a play where we were judges of the 3 cases we had just attended. We were able to discuss and learn a lot of things, on what the law imposes, on morals ...",
    imagePath: "/images/sustainability/harassment.png",
  },
];
