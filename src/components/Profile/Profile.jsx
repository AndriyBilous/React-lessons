import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = () => {
  return (
    <main className={classes.content}>
      <ProfileInfo />

      <MyPosts />
    </main>
  );
};

export default Profile;
