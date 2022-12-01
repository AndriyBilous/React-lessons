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

  const dialogsData = [
    {id: 1, name: 'Andrey',},
    {id: 2, name: 'Dmitriy',},
    {id: 3, name: 'Dariya',},
    {id: 4, name: 'Anastasiya',},
  ];

  const dialogsElement = dialogsData.map((el) => <DialogItem name={`${el.name}`} id={`${el.id}`}/>
  )

  const messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Holla" },
    { id: 4, message: "Good day" },
    { id: 5, message: "How are you" },
  ];

  const messagesElements = messagesData.map(el => <Message message={el.message} id={el.id}/>)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {dialogsElement}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
