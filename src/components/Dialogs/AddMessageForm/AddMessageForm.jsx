import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import styles from "./../Dialogs.module.css";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    

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