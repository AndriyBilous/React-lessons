const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogsData: [
      { id: 1, name: "Andrey" },
      { id: 2, name: "Dmitriy" },
      { id: 3, name: "Dariya" },
      { id: 4, name: "Anastasiya" },
    ],

    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "Holla" },
      { id: 4, message: "Good day" },
      { id: 5, message: "How are you" },
    ],

    newMessageText: "New message",
  };

const dialogsReduser = (state = initialState, action) => {
    // let stateCopy = JSON.parse(JSON.stringify(state));


    switch(action.type) {
        case ADD_MESSAGE:
          const idData = state.messagesData.length + 1;
          const messageData = state.newMessageText;

          return {
            ...state,
            messagesData: [...state.messagesData, {id: idData,
              message: messageData,}],
            newMessageText: '',
          };
        case UPDATE_NEW_MESSAGE_TEXT:
          return {
            ...state,
            newMessageText: action.newText
           };
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

  export const sendMessage = () => ({
    type: ADD_MESSAGE
})

export const updateNewMessageText = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default dialogsReduser;