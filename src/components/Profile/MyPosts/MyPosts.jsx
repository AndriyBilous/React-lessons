import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReduser";


const MyPosts = (props) => {

  const postsElements = props.postsData.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)

  const onAddPost = () => {
    props.addPost();
    // const action = addPostActionCreator();
    // props.dispatch(action);
  };

  const newPostElement = React.createRef();

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // const action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
  };

  return (
    <div className={styles.wrapper}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
