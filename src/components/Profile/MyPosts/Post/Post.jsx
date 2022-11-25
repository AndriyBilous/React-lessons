import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://cdn.pixabay.com/photo/2017/11/13/07/14/cats-eyes-2944820_960_720.jpg"
        alt="avatar"
      ></img>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
