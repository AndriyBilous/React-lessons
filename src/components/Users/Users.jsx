import React from "react";
import styles from "./Users.module.css"
import userAvatar from "../../Assets/Images/avatar-small.jpg"
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersApi } from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return <div>
          <div>
            {pages.map(page => {return <span className={props.currentPage === page ? styles.selectedPage : ""} key={page} onClick={(e) => props.onPageChanged(page)}>{page}</span>})}
          </div>
          {props.users.map((u) => (
            <div key={u.id}>
              <span>
                <div>
                  <NavLink to={'/profile/' + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userAvatar}
                    alt="picture"
                    className={styles.userPhoto}
                  />
                  </NavLink>
                </div>
                <div>
                  {u.followed 
                  ? (<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.toggleIsFollowingInProgress(true, u.id);
                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers:{
                    //   'API-KEY': 'c3f046fc-05ff-4b87-bbb4-30bacd2184a7'
                    // }}).
                    usersApi.followed('true', u).
                    then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.toggleIsFollowingInProgress(false, u.id);
                    })
                  }}>Unfollow</button>) 

                  : (<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.toggleIsFollowingInProgress(true, u.id);
                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {withCredentials: true}).
                    usersApi.followed('false', u).
                    then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleIsFollowingInProgress(false, u.id);
                    })
                  }}>Follow</button>)
                  }
                </div>
              </span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </div>
          ))}
        </div>
}

export default Users;