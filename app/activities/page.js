import Image from "next/image";
import styles from "../../styles/Sustainability.module.css";
import utils from "../../styles/utils.module.css";
import CardList from "../../components/cardList";

export default function Activities() {
  return (
    <div className={utils.page}>
      <div className={utils.sectionTop}>
        <h1 className={utils.sectionTitle}>Other activities</h1>
        <p>
          On this page the rest of the activities I do the rest of the time, to
          relax and to discover new things...
        </p>
      </div>
      <CardList list={activities} />
    </div>
  );
}

const activities = [
  {
    title: "Guitar",
    description:
      "I have been playing guitar for over 10 years. I was part of a band in high school and we played in bars.",
    imagePath: "/images/activities/guitar.png",
  },
  {
    title: "Computer Graphics",
    description:
      "I have been learning computer graphics for a few years now and love creating new images and small videos, it helps to develop my creative side.",
    imagePath: "/images/activities/blender.png",
  },
  {
    title: "Ethical Hacking",
    description:
      "I recently discovered the world of cybersecurity, and I learn a lot of things, I have fun trying to penetrate into systems with flaws (on test machines made expressly for that)",
    imagePath: "/images/activities/hacking.png",
  },
  {
    title: "Competitive games",
    description:
      "Because a little competition doesn't hurt, I like to spend some time on online video games and fight against other players to climb as high as possible in the rankings.",
    imagePath: "/images/activities/competition.png",
  },
];
