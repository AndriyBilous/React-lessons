import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://cdn.pixabay.com/photo/2022/10/07/12/02/sunset-7504891_960_720.jpg" alt="#" />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login :
        <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
