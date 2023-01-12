import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import utils from "../styles/utils.module.css";

export default function Arrow() {
  return (
    <div className={utils.arrowCircle}>
      <FontAwesomeIcon icon={faArrowDown} className={utils.arrow} />
    </div>
  );
}
