"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
import profilePic from "../public/images/profile-picture.webp";

import styles from "../styles/navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuActive((active) => !active);

  useEffect(() => {
    function handleScroll() {
      setProfileActive(window.scrollY > 400);
    }
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Home">
        <div
          className={`${styles.profile} ${
            profileActive || pathname != "/" ? styles.profileActive : ""
          }`}
        >
          <div className={styles.profileContainer}>
            <Image
              className={styles.profilePicture}
              src={profilePic}
              alt="Picture of Célian DEBETHUNE"
              priority={true}
            />
            <p className={styles.name}>Célian DEBÉTHUNE</p>
          </div>
        </div>
      </Link>
      <nav className={styles.navigation}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.menuButton}
          onClick={toggleMenu}
        />
        <ul
          className={`${styles.links} ${menuActive ? styles.linksActive : ""}`}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`${styles.menuButton} ${styles.arrow}`}
            onClick={toggleMenu}
          />
          {links.map((link, id) => (
            <li
              className={`${styles.link} ${
                pathname == link.route ? styles.active : ""
              }`}
              key={id}
              onClick={toggleMenu}
            >
              <Link href={link.route}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const links = [
  { name: "Home", route: "/" },
  { name: "Career Development", route: "/career" },
  { name: "Engineering Courses", route: "/courses" },
  { name: "International Mobility", route: "/international" },
  { name: "Sustainability | Civic Engagement", route: "/sustainability" },
  { name: "Activities", route: "/activities" },
];
