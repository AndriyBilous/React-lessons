import React from "react";
// import styles from "./Dialogs.module.css";
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  const onSendMessage = () => {
    const action = sendMessageActionCreator();
    props.store.dispatch(action);
  }

  const onMessageChange = (text) => {
    const action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };


  return (
    <Dialogs updateNewMessageText={onMessageChange} sendMessage={onSendMessage} dialogsPage={props.store.getState().dialogsPage}/>
  );
};

export default DialogsContainer;
