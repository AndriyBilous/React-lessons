import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  const postsData = [
    {message: "Hi, how are you?", likesCount: "15", id: "0"},
    {message: "Hi, i'm fine, ty", likesCount: "23", id: "1"}
  ]

  const postsElements = postsData.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)

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
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
