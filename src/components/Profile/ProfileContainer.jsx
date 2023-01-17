import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReduser.js";
import Profile from "./Profile.jsx";
import classes from "./Profile.module.css";
import { useParams } from 'react-router-dom';

export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}

class ProfileContainer extends React.Component {
    
    componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) userId = 2;
        axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
