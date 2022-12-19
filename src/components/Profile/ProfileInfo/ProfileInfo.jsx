import React from "react";
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
      <div>
        <div >
            <img src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg" alt="#"></img>
        </div>
        <div className={styles.description_block}>
            ava + description
            </div>
      </div>
    );
}

export default ProfileInfo;