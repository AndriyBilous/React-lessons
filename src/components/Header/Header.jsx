import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://cdn.pixabay.com/photo/2022/10/07/12/02/sunset-7504891_960_720.jpg" alt="#" />
      <div className={classes.loginBlock}>
        {props.isAuth ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div> :
        <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
