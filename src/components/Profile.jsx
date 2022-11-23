import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <main className={classes.content}>
      <img src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg"></img>
      <img src="https://cdn.pixabay.com/photo/2017/11/13/07/14/cats-eyes-2944820_960_720.jpg"></img>
      Main content
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={classes.posts}>
          <div className={classes.item}>Post 1</div>
          <div className={classes.item}>Post 2</div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
