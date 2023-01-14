import ImageCard from "./imageCard";
import utils from "../styles/utils.module.css";

export default function CardList({ list }) {
  return (
    <div className={utils.cardList}>
      {list.map((item, id) => (
        <ImageCard
          key={id}
          title={item.title}
          description={item.description}
          imagePath={item.imagePath}
        />
      ))}
    </div>
  );
}
