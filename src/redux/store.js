const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { message: "Hi, how are you?", likesCount: "15", id: "1" },
        { message: "Hi, i'm fine, ty", likesCount: "23", id: "2" },
      ],
      newPostText: "Message from state",
    },

    dialogsPage: {
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
    },
  },

  getState() {
    return this._state;
  },
  _callsubscriber(){
    console.log('State changed');
  },
  subscribe(observer) {
    this._callsubscriber = observer;
  },

  // addPost() {
  //   const newPost = {
  //     id: this._state.profilePage.postsData.length + 1,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };
  //   this._state.profilePage.postsData.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callsubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callsubscriber(this._state);
  // },

  // addMessage() {
  //   const newMessage = { 
  //     id: this._state.dialogsPage.messagesData.length + 1,
  //     message: this._state.dialogsPage.newMessageText,
  //   };
  //   this._state.dialogsPage.messagesData.push(newMessage);
  //   this._state.dialogsPage.newMessageText = '';
  //   this._callsubscriber(this._state);
  // },
  // updateNewMessageText (newText) {
  //   this._state.dialogsPage.newMessageText = newText;
  //   this._callsubscriber(this._state);
  // },

  dispatch(action) { // (type: 'ADD-POST')
    if (action.type === ADD_POST) {
      const newPost = {
        id: this._state.profilePage.postsData.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callsubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callsubscriber(this._state);
    } else if (action.type === ADD_MESSAGE){
      const newMessage = {
        id: this._state.dialogsPage.messagesData.length + 1,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callsubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
      this._state.dialogsPage.newMessageText = action.newText;
      this._callsubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
  }
}

export default store;
window.store = store;

// store - OOP