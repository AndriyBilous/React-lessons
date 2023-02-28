import { profileApi, usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
  postsData: [
    { message: "Hi, how are you?", likesCount: "15", id: "1" },
    { message: "Hi, i'm fine, ty", likesCount: "23", id: "2" },
  ],
  dataProfile: null,
  status: ""
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST:
        const idData = state.postsData.length + 1;
        const messageData = action.newPostText;

        const newPost = { id: idData, message: messageData, likesCount: 0 };

        return {
          ...state,
          postsData: [...state.postsData, newPost],
        };

      case SET_USER_PROFILE:
        return { ...state, dataProfile: action.dataProfile };

      case SET_STATUS:
        return {...state, status: action.status};
      
        default:
        return state;
    }
}

  export const addPost = (newPostText) => ({
    type: ADD_POST, newPostText
  })

  export const setUserProfile = (dataProfile) => ({
    type: SET_USER_PROFILE, dataProfile
  })

  export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersApi.getProfile(userId);
      
        dispatch(setUserProfile(response.data));
  }

  export const setStatus = (status) => ({
    type: SET_STATUS, status
  })

  export const getStatus = (userId) => async (dispatch) => {
    const response = await profileApi.getStatus(userId);
      
        dispatch(setStatus(response.data));
  }

  export const updateStatus = (status) => async (dispatch) => {
    const response = await profileApi.updateStatus(status);

        if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
  }

export default profileReduser;