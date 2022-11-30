import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.wrapper}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message="Hi, how are you?" likesCount="15" />
        <Post message="Hi, i'm fine, ty" likesCount="23" />
      </div>
    </div>
  );
};

export default MyPosts;
