import React from "react";
import Preloader from "../../common/Preloader";
import styles from "./ProfileInfo.module.css";
// import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userAvatar from "../../../Assets/Images/avatar-small.jpg";

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className={styles.description_block}>
        <div className={styles.description_avatar_block}>
        <img
          src={profile.photos.large || userAvatar}
          alt=""
          className={styles.description_avatar}
        /></div>
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
            {/* <label for="file" class="feedback__label-file">
                <input type="file"  id="file" class={styles.feedback__file}/>
              </label> */}
          </div>
        )}
      </div>
      <div>{profile.aboutMe}</div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
