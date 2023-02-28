import React from "react";
import styles from "./Users.module.css"
import userAvatar from "../../Assets/Images/avatar-small.jpg"
import { NavLink } from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return  <div>
              <span>
                <div>
                  <NavLink to={'/profile/' + user.id}>
                  <img
                    src={user.photos.small != null ? user.photos.small : userAvatar}
                    alt="avatar"
                    className={styles.userPhoto}
                  />
                  </NavLink>
                </div>
                <div>
                  {user.followed 
                  ? (<button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id);
                  }}>Unfollow</button>) 

                  : (<button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id);
                  }}>Follow</button>)
                  }
                </div>
              </span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </div>

}

export default User;