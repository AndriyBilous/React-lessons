import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
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
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.textInput_container}>
        <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
        <button className={styles.buttonSend}>Send</button>
      </div>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;
