import { Contact } from "./ProfileInfo";
import styles from "./ProfileInfo.module.css";
import errorStyle from "./../../common/FormsControls/FormControls.module.css"
import {Input, Textarea, createField} from "./../../common/FormsControls/FormControls"
import { reduxForm } from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
      <form onSubmit={handleSubmit} className={styles.ProfileInfo_info_container}>
        <div>
          <button onClick={() => {}}>Save</button>
        </div>
        {error && <div className={errorStyle.formSummaryError}>{error}</div>}
        <div>
          <b>Full name : </b>
          {createField(Input, "fullName", "Full name", [])}
          <b>Looking for a job : </b>
          {createField(Input, "lookingForAJob", "", [], {type: "checkbox"})}
        </div>
          <div><b>My professional skills : </b>
          {createField(Textarea, "lookingForAJobDescription", "My professional skills", [])}
          </div>
          <div>
            <b>About me : </b>
            {createField(Textarea, "aboutMe", "About me", [])}
          </div>
          
          <div>
            <div>
              <b>Contacts : </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={styles.description_block_item}>{key}: {createField(Input, "contacts." + key, key, [])}</div>
              })}
            </div>
        </div>
      </form>
    );
  }

  const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;