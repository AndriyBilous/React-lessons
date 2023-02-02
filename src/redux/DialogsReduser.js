const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
  };

const dialogsReduser = (state = initialState, action) => {
    // let stateCopy = JSON.parse(JSON.stringify(state));


    switch(action.type) {
        case ADD_MESSAGE:
          const idData = state.messagesData.length + 1;
          const messageData = action.newMessageText;

          return {
            ...state,
            messagesData: [...state.messagesData, {id: idData,
              message: messageData,}]
          };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageText) => ({
      type: ADD_MESSAGE, newMessageText
  })

  export const sendMessage = () => ({
    type: ADD_MESSAGE
})

export default dialogsReduser;