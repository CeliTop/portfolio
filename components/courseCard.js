import Card from "./card";
import utils from "../styles/utils.module.css";

import Image from "next/image";

export default function CourseCard({ imagePath, courseName }) {
  return (
    <Card className={utils.courseCard} dark>
      <div className={utils.courseTop}>
        <Image
          className={utils.courseImage}
          src={imagePath}
          alt="course image"
          width={240}
          height={240}
        />
      </div>
      <div className={utils.courseName}>{courseName}</div>
    </Card>
  );
}
