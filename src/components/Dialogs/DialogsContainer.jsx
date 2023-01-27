import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
// import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReduser";
import { sendMessage, updateNewMessageText} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {

//   const onSendMessage = () => {
//     const action = sendMessageActionCreator();
//     props.store.dispatch(action);
//   }

//   const onMessageChange = (text) => {
//     const action = updateNewMessageTextActionCreator(text);
//     props.store.dispatch(action);
//   };


//   return (
//     <Dialogs updateNewMessageText={onMessageChange} sendMessage={onSendMessage} dialogsPage={props.store.getState().dialogsPage}/>
//   );
// };


const mapStateToProps= (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

export default compose(
  connect (mapStateToProps, { sendMessage, updateNewMessageText}),
  withAuthRedirect)
  (Dialogs)
