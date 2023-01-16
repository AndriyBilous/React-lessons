import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReduser.js";
import Profile from "./Profile.jsx";
import classes from "./Profile.module.css";

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
    }
    
    render() {
        return (
            <main className={classes.content}>
              <Profile {...this.props} profile={this.props.profile}/>
            </main>
          )
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.dataProfile
})

export default connect (mapStateToProps, {setUserProfile})(ProfileContainer);
