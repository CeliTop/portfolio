import styles from "../styles/Home.module.css";

export default function YoutubePlayer({ link }) {
  return (
    <iframe
      width="560"
      height="315"
      src={link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={styles.video}
    ></iframe>
  );
}
