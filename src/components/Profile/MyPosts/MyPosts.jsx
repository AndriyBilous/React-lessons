import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" likesCount="15" />
        <Post message="Hi, i'm fine, ty" likesCount="23" />
      </div>
    </div>
  );
};

export default MyPosts;
