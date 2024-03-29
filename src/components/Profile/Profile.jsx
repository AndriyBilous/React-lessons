import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {

  return (
    <main className={classes.content}>
      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveProfileInfo={props.saveProfileInfo}/>
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
