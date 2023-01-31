import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {

  return (
    <main className={classes.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
      {/* <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/> */}
    </main>
  );
};

export default Profile;
