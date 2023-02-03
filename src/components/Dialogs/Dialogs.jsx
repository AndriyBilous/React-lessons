import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
// import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReduser";

const Dialogs = (props) => {

const dialogsElement = props.dialogsPage.dialogsData.map((el) => <DialogItem name={`${el.name}`} id={`${el.id}`} key={`${el.id}`}/>
  );

  const messagesElements = props.dialogsPage.messagesData.map(el => <Message message={el.message} id={el.id} key={el.id}/>);

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) {
    return <Navigate to='/login/' />
  };


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElement}</div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  );
};

export default Dialogs;
