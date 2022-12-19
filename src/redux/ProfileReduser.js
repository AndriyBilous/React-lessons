const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  postsData: [
    { message: "Hi, how are you?", likesCount: "15", id: "1" },
    { message: "Hi, i'm fine, ty", likesCount: "23", id: "2" },
  ],
  newPostText: "Message from state",
};

const profileReduser = (state = initialState, action) => {
  let stateNew = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: stateNew.postsData.length + 1,
                message: stateNew.newPostText,
                likesCount: 0,
              };
              stateNew.postsData.push(newPost);
              stateNew.newPostText = '';
              return stateNew;

        case UPDATE_NEW_POST_TEXT:
          stateNew.newPostText = action.newText;
            return stateNew;
        default:
            return stateNew;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
  })
  
  export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  })

export default profileReduser;