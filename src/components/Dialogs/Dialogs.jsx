import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

const dialogsElement = props.dialogsPage.dialogsData.map((el) => <DialogItem name={`${el.name}`} id={`${el.id}`} key={`${el.id}`}/>
  );

  const messagesElements = props.dialogsPage.messagesData.map(el => <Message message={el.message} id={el.id} key={el.id}/>);

  const messageText = React.createRef();

  const sendMessage = () => {
    props.addMessage();
  }

  const onMessageChange = () => {
    let text = messageText.current.value;
    props.updateNewMessageText(text);
  };


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElement}</div>
      <div className={styles.messages}>
        {messagesElements}
        <div className={styles.textInput_container}>
          <textarea onChange={onMessageChange} className={styles.textArea} ref={messageText} value={props.dialogsPage.newMessageText}/>
          <button onClick={sendMessage} className={styles.buttonSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
