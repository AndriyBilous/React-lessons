import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageActionCreator} from "../../redux/dialogsReduser";
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

const mapDispatchToProps = (dispatch) => {
  return{
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageActionCreator(newMessageBody))
    }
  }
}

export default compose(
  connect (mapStateToProps, mapDispatchToProps),
  withAuthRedirect)
  (Dialogs)
