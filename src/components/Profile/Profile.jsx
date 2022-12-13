import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {

  return (
    <main className={classes.content}>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
      {/* <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/> */}
    </main>
  );
};

export default Profile;
