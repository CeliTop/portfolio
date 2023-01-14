import utils from "../styles/utils.module.css";

export default function Download({ dark, filePath, text }) {
  return (
    <button className={`${utils.download} ${dark ? utils.downloadDark : ""}`}>
      <a href={filePath} download>
        {text}
      </a>
    </button>
  );
}
