import React from "react";
import Preloader from "../../common/Preloader";
import styles from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({profile, updateStatus, status}) => {
  if (!profile) {
    return <Preloader />
  }
    return (
      <div>
        <div className={styles.description_block}>
          <img src={profile.photos.large} alt="" />
        </div>
        <div>{profile.aboutMe}</div>
        <ProfileStatus status={status} updateStatus={updateStatus}/>
      </div>
    );
}

export default ProfileInfo;