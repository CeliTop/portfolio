import utils from "../styles/utils.module.css";

export default function Tag({ text, colorClass }) {
  return <div className={`${utils.tag} ${utils[colorClass]}`}>{text}</div>;
}
