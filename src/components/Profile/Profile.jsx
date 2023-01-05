import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = () => {

  return (
    <main className={classes.content}>
      <ProfileInfo />
      <MyPostsContainer />
      {/* <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/> */}
    </main>
  );
};

export default Profile;
