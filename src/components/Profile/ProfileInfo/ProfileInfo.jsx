import React, { useState } from "react";
import Preloader from "../../common/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userAvatar from "../../../Assets/Images/avatar-small.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfileInfo }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfileInfo(formData).then(() => {setEditMode(false)})
  };

  return (
    <div>
      <div className={styles.description_block}>
        <div className={styles.description_avatar_block}>
          <img
            src={profile.photos.large || userAvatar}
            alt=""
            className={styles.description_avatar}
          />
        </div>
        {isOwner && (
          <div>
            <div>Choose a profile picture:</div>
            <input
              type={"file"}
              placeholder={"Insert file"}
              accept={".jpg, .jpeg, .png"}
              onChange={mainPhotoSelected}
              className={styles.description_avatar_download_button}
            />
          </div>
        )}
      </div>
      {editMode ? (
        <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          activateEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div className={styles.ProfileInfo_info_container}>
      {isOwner && (
        <div>
          <button onClick={activateEditMode}>Edit</button>
        </div>
      )}
      <div>
        <div>
          <b>Full name : </b>
          {profile.fullName}
        </div>
        <div>
          <b>Looking for a job : </b>
          {profile.lookingForAJob ? "yes" : "no"}
        </div>
      </div>
      {profile.lookingForAJobDescription ? (
        <div><b>My professional skills : </b>{profile.lookingForAJobDescription}</div>
      ) : (
        ""
      )}
      <div>
        <b>About me</b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.ProfileInfo_contacts_container}>
      <b>{contactTitle} : </b>
      {contactValue}
    </div>
  );
};

export default ProfileInfo;
