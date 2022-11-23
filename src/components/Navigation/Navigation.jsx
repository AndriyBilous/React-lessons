import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li className={`${classes.item} ${classes.active}`}>
          <a href="#">Profile</a>
        </li>
        <li className={classes.item}>
          <a href="#">Messages</a>
        </li>
        <li className={classes.item}>
          <a href="#">News</a>
        </li>
        <li className={classes.item}>
          <a href="#">Music</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
