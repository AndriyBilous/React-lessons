import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReduser";


const MyPosts = (props) => {

  const postsElements = props.postsData.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)

  const addNewPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={styles.wrapper}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPost}/>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newPostText"
          placeholder="Enter your new post"
        />
        <button>Add post</button>
      </div>
    </form>
  );
}

const AddPostFormRedux = reduxForm({
  form: "postNewTextAddForm"
})(AddPostForm)

export default MyPosts;
