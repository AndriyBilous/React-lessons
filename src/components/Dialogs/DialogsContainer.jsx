import React from "react";
import { connect } from "react-redux";
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

// const mapDispatchToProps= (dispatch) => {
//   return {
//     sendMessage: () => {dispatch(sendMessageActionCreator())},
//     updateNewMessageText: (text) => {dispatch(updateNewMessageTextActionCreator(text))},
//   }
// }

const DialogsContainer = connect (mapStateToProps, { sendMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;
