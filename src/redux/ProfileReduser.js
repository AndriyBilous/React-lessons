import { usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
  postsData: [
    { message: "Hi, how are you?", likesCount: "15", id: "1" },
    { message: "Hi, i'm fine, ty", likesCount: "23", id: "2" },
  ],
  newPostText: "Message from state",
  dataProfile: null,
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
          const idData = state.postsData.length + 1;
          const messageData = state.newPostText;

          const newPost = {id: idData, message: messageData, likesCount: 0};

          return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: '',
          }

        case UPDATE_NEW_POST_TEXT: 
        return {...state, newPostText: action.newText}

        case SET_USER_PROFILE: 
        return {...state, dataProfile: action.dataProfile}

        default:
            return state;
    }
}

  export const addPost = () => ({
    type: ADD_POST
  })
  
  export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  })

  export const setUserProfile = (dataProfile) => ({
    type: SET_USER_PROFILE, dataProfile
  })

  export const getUserProfile = (userId) => (dispatch) => {
    usersApi.getProfile(userId)
      .then((response) => {
        dispatch(setUserProfile(response.data));
      });
  }

export default profileReduser;