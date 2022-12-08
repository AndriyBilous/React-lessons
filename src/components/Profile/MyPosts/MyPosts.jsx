import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {



  const postsElements = props.postsData.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)

 

  const addPost = () => {
    props.addPost();
  };

  const newPostElement = React.createRef();

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  };

  return (
    <div className={styles.wrapper}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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
