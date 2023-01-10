import axios from "axios";
import React from "react";
import styles from "./Users.module.css"
import userAvatar from "../../Assets/Images/avatar-small.jpg"


const Users = (props) => {

    // props.setUsers();
    
    if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then(response => {
        props.setUsers(response.data.items)})
    }
    // if (props.users.length === 0) {
    //     props.setUsers(  [
    //         { id: "1", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: false, fullName: "Andriy B.", status: "I`m a boss", location: {city: "Kiev", country: "Ukraine"}},
    //         { id: "2", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: true, fullName: "Dariya D.", status: "I`m a worker", location: {city: "Lviv", country: "Ukraine"}},
    //         { id: "3", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: false, fullName: "Mariya C.", status: "I`m a student", location: {city: "Berlin", country: "Germany"}},
    //         { id: "4", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: false, fullName: "Oleg D.", status: "I`m a trader", location: {city: "Dnipropetrovsk", country: "Ukraine"}},
    //         { id: "5", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: true, fullName: "Alena V.", status: "I`m a trainer", location: {city: "Vrotslav", country: "Poland"}},
    //       ])
    // }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div><img src={u.photos.small != null ? u.photos.small : userAvatar} alt="picture" className={styles.userPhoto}/></div>
                <div>
                    {u.followed 
                    ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}  
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
            </div>)
        }
    </div>
}

export default Users;