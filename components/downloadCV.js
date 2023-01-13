import utils from "../styles/utils.module.css";

export default function DownloadCV({ dark }) {
  return (
    <button className={`${utils.download} ${dark ? utils.downloadDark : ""}`}>
      <a href="/files/CV DEBETHUNE Célian.pdf" download>
        Download my CV
      </a>
    </button>
  );
}
