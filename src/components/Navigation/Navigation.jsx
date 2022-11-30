import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => isActive ? `${styles.active}` : '';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li className={styles.item}>
          <NavLink to="/" className={setActive}>Profile</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="news" className={setActive}>News</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="music" className={setActive}>Music</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
