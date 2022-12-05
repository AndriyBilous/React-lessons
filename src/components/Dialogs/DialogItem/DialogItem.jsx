import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css"

const setActive = ({isActive}) => isActive ? `${styles.active}` : '';

const DialogItem = (props) => {
    return (
      <div className={styles.dialog} >
        <NavLink to={props.id} className={setActive}>{props.name}</NavLink>
      </div>
    );
}

export default DialogItem;