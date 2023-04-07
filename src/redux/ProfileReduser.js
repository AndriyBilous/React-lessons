import { stopSubmit } from "redux-form";
import { profileApi, usersApi } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

const initialState = {
  postsData: [
    { message: "Hi, how are you?", likesCount: "15", id: "1" },
    { message: "Hi, i'm fine, ty", likesCount: "23", id: "2" },
  ],
  dataProfile: null,
  status: "",
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
      return { ...state, status: action.status };

    case DELETE_POST:
      return {
        ...state,
        posts: state.postsData.filter((p) => p.id !== action.postId),
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        dataProfile: { ...state.dataProfile, photos: action.photos },
      };

    default:
      return state;
  }
};

// -------------Action creators------------------

export const addPost = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (dataProfile) => ({
  type: SET_USER_PROFILE,
  dataProfile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

// ------------Thunk creators------------------

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersApi.getProfile(userId);

  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileApi.getStatus(userId);

  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileApi.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileApi.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfileInfo = (profileData) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const response = await profileApi.saveProfileInfo(profileData);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    const sequence = (errorObject) => {
      dispatch(stopSubmit("editProfile", errorObject));
    };

    const fieldName = (number) => {
      const text = response.data.messages[number];
      const textSplitted = text.split("->");

      return textSplitted[1].replace(")", "").toLowerCase();
    };

    const errorObject = {};
    const finalErrorObject = {};

    if (response.data.messages.length === 1) {
      errorObject[fieldName(0)] = response.data.messages[0];
      finalErrorObject.contacts = errorObject;
      sequence(finalErrorObject);
    } else {
      for (let i = 0; i < response.data.messages.length; i++) {
        errorObject[fieldName(i)] = response.data.messages[i];
      }
      finalErrorObject.contacts = errorObject;
      sequence(finalErrorObject);
    }
    return Promise.reject();
  }
  
};

export default profileReduser;
