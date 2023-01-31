import React from "react";
import Preloader from "../../common/Preloader";
import styles from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
    return (
      <div>
        {/* <div>
          <img
            src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg"
            alt="#"
          ></img>
        </div> */}
        <div className={styles.description_block}>
          <img src={props.profile.photos.large} alt="" />
        </div>
        <div>{props.profile.aboutMe}</div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    );
}

export default ProfileInfo;