import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormControls";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReduser";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {
  const postsElements = props.postsData.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)

  const addNewPost = (values) => {
    props.addPost(values.newPostText);
    // values.newPostText = '';
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
})

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Enter your new post"
          validate={[required, maxLength10]}
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
