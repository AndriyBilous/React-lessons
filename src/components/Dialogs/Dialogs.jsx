import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const setActive = ({isActive}) => isActive ? `${styles.active}` : '';

const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

const DialogItem = (props) => {
  return (
    <div className={`${styles.dialog} + ' ' + ${setActive}`}>
          <NavLink to={props.id}>{props.name}</NavLink> 
        </div>
  )
}

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        <DialogItem name='Andrey' id='1'/>
        <DialogItem name='Dmitriy' id='2'/>
        <DialogItem name='Dariya' id='3'/>
        <DialogItem name='Anastasiya' id='4'/>
      </div>
      <div className={styles.messages}>
        <Message message='Hi'/>
        <Message message='Holla'/>
        <Message message='Hello'/>
        <Message message='Greetings'/>
      </div>
    </div>
  );
};

export default Dialogs;
