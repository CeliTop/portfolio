import Card from "./card";
import utils from "../styles/utils.module.css";

import Image from "next/image";

export default function ImageCard({ imagePath, title, description }) {
  return (
    <Card className={utils.imageCard} dark>
      <div className={utils.imageTop}>
        <Image
          className={utils.cardImage}
          src={imagePath}
          alt="subject image"
          width={240}
          height={240}
        />
      </div>
      <div className={utils.cardTitle}>{title}</div>
      {description ? (
        <p className={utils.cardDescription}>{description}</p>
      ) : (
        ""
      )}
    </Card>
  );
}
