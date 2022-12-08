let rerenderEntireTree;

const state = {
    profilePage: {
      postsData: [
        {message: "Hi, how are you?", likesCount: "15", id: "1"},
        {message: "Hi, i'm fine, ty", likesCount: "23", id: "2"}
      ],
      newPostText: "Message from state",
    },
    
    dialogsPage: {
      dialogsData: [
          {id: 1, name: 'Andrey',},
          {id: 2, name: 'Dmitriy',},
          {id: 3, name: 'Dariya',},
          {id: 4, name: 'Anastasiya',},
        ],
        
        messagesData: [
          { id: 1, message: "Hi" },
          { id: 2, message: "Hello" },
          { id: 3, message: "Holla" },
          { id: 4, message: "Good day" },
          { id: 5, message: "How are you" },
        ],

        newMessageText: "New message",
    },

}

export const addPost = () => {
  const newPost = {
    id: state.profilePage.postsData.length + 1,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const addMessage = () => {
  const newMessage = { 
    id: state.dialogsPage.messagesData.length + 1,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;

// store - OOP