import React from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReduser.js";
import Profile from "./Profile.jsx";
import classes from "./Profile.module.css";
import { Navigate, useParams } from 'react-router-dom';

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
      this.props.getUserProfile(userId);
      // usersApi.getProfile(userId)
      // .then((response) => {
      //   this.props.setUserProfile(response.data);
      // });
    }

    
    
    render() {
      if (!this.props.isAuth) {
        return <Navigate to="/login/" />;
      }

      return (
        <main className={classes.content}>
          <Profile {...this.props} profile={this.props.profile} />
        </main>
      );
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.dataProfile,
    isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
