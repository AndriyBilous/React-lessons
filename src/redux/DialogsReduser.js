const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReduser = (state, action) => {

    switch(action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageText,
              };
              state.messagesData.push(newMessage);
              state.newMessageText = '';
              return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({
      type: ADD_MESSAGE
  })
  
  export const updateNewMessageTextActionCreator = (text) => ({
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text
  })

export default dialogsReduser;