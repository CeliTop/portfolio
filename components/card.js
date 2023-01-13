import utils from "../styles/utils.module.css";

export default function Card({ children, dark, className }) {
  return (
    <div className={`${utils.card} ${className} ${dark ? utils.dark : ""}`}>
      {children}
    </div>
  );
}
