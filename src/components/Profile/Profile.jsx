import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <main className={classes.content}>
      <img src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg"></img>
      Main content
      <div>ava + description</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
