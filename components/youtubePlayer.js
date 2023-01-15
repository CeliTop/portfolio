import utils from "../styles/utils.module.css";

export default function YoutubePlayer({ link }) {
  return (
    <iframe
      width="560"
      height="315"
      src={link}
      loading="lazy"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={utils.video}
    ></iframe>
  );
}
