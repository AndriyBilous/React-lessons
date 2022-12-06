import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {



  const postsElements = props.postsData.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)

  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    text = '';
  };

  const newPostElement = React.createRef();

  return (
    <div className={styles.wrapper}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
