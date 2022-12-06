import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

const dialogsElement = props.state.dialogsData.map((el) => <DialogItem name={`${el.name}`} id={`${el.id}`} key={`${el.id}`}/>
  );

  const messagesElements = props.state.messagesData.map(el => <Message message={el.message} id={el.id} key={el.id}/>);

  const messageText = React.createRef();
  const sendMessage = () => {
    const message = messageText.current.value;
    return alert(message);
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElement}</div>
      <div className={styles.messages}>
        {messagesElements}
        <div className={styles.textInput_container}>
          <textarea className={styles.textArea} ref={messageText}></textarea>
          <button onClick={sendMessage} className={styles.buttonSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
