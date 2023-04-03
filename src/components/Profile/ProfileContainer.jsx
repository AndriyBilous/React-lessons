import React from "react";
import { connect } from "react-redux";
import {
  getStatus,
  getUserProfile,
  updateStatus,
  savePhoto
} from "../../redux/profileReduser.js";
import Profile from "./Profile.jsx";
import classes from "./Profile.module.css";
import { useParams } from "react-router-dom";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.autorizedUserId;

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <main className={classes.content}>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
        />
      </main>
    );
  }
}

// (props) => {
//   if (!this.props.isAuth) {
//     return <Navigate to="/login/" />;
//   }

//   return <ProfileContainer {...props}/>
// }

const mapStateToProps = (state) => ({
  profile: state.profilePage.dataProfile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter
)(ProfileContainer);
