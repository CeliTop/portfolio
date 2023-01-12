import utils from "../styles/utils.module.css";

export default function Card({ children, dark }) {
  return (
    <div className={`${utils.card} ${dark ? utils.dark : ""}`}>{children}</div>
  );
}
