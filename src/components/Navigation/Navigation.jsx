import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => isActive ? `${classes.active}` : '';

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li className={classes.item}>
          <NavLink to="/" className={setActive}>Profile</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="Dialogs" className={setActive}>Messages</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="News" className={setActive}>News</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="Music" className={setActive}>Music</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
