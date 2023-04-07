import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import styles from "./../Dialogs.module.css";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  const text = ["Invalid url format (Contacts->Facebook)"];
    const textSplitted = text[0].split('->');
    const textConverted = textSplitted[1].replace(")", "").toLowerCase();
    const object1 = {};
    object1[textConverted] = "message";
    const objectForErrorMessage = {contacts: ""};
    objectForErrorMessage.contacts = object1;

    console.log(object1);
    console.log(objectForErrorMessage);
    return (
      <form onSubmit={props.handleSubmit}>
        <div className={styles.textInput_container}>
          <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={[required, maxLength100]}/>
          <button className={styles.buttonSend}>Send</button>
        </div>
      </form>
    );
  }

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);