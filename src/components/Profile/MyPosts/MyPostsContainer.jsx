// import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";


// const MyPostsContainer = (props) => {

//   const state = props.store.getState();


//   const addPost = () => {
//     const action = addPostActionCreator();
//     props.store.dispatch(action);
//   };

//   const onPostChange = (text) => {
//     const action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   };

//   return (
//     <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>
//   );
// };

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
