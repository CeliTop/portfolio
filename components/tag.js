import utils from "../styles/utils.module.css";

export default function Tag({ text, colorClass, keyProps }) {
  return (
    <li className={`${utils.tag} ${utils[colorClass]}`} key={keyProps}>
      {text}
    </li>
  );
}
