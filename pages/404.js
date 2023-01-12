import "../styles/globals.css";
import utils from "../styles/utils.module.css";

import Link from "next/link";

// Fonts
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function NotFoundPage() {
  return (
    <div className={`${inter.className} ${utils.errorPage}`}>
      <p className={utils.errorNumber}>404</p>
      <p className={utils.errorMessage}>{"Sorry this page doesn't exist"}</p>
      <br></br>
      <button className={utils.goTo}>
        <Link href="/" aria-label="Home">
          Go to the homepage
        </Link>
      </button>
    </div>
  );
}
