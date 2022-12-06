import React from "react";
import rerenderEntireTree from './../render'

const state = {
    profilePage: {
          postsData: [
            {message: "Hi, how are you?", likesCount: "15", id: "1"},
            {message: "Hi, i'm fine, ty", likesCount: "23", id: "2"}
          ],
    },
    
        dialogsPage: {
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Hello" },
                { id: 3, message: "Holla" },
                { id: 4, message: "Good day" },
                { id: 5, message: "How are you" },
              ],

              dialogsData: [
                {id: 1, name: 'Andrey',},
                {id: 2, name: 'Dmitriy',},
                {id: 3, name: 'Dariya',},
                {id: 4, name: 'Anastasiya',},
              ],
        },

}

export const addPost = (postMessage) => {
  const newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
}

export default state;