import React from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReduser.js";
import Profile from "./Profile.jsx";
import classes from "./Profile.module.css";
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { compose } from "redux";

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
      return (
        <main className={classes.content}>
          <Profile {...this.props} profile={this.props.profile} />
        </main>
      );
    }
};

// (props) => {
//   if (!this.props.isAuth) {
//     return <Navigate to="/login/" />;
//   }

//   return <ProfileContainer {...props}/>
// }

const mapStateToProps = (state) => ({
    profile: state.profilePage.dataProfile
})

export default compose(connect (mapStateToProps, {getUserProfile}) , withRouter
// , withAuthRedirect
)(ProfileContainer);
