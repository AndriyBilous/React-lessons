import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation.jsx";
import ProfileContainer, { withRouter } from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import { initializeApp } from "./redux/appReduser";

class App extends React.Component {
  componentDidMount() {
    // this.props.getAuthUserData();
    this.props.initializeApp();
    }
  
  render () {
    if(!this.props.initialized) return <Preloader />

    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navigation />
          <div className="app-wrapper__content">
            <Routes >
              <Route path="/profile/:userId" element={<ProfileContainer/>}/>
              <Route path="/profile/*" element={<ProfileContainer/>}/>
              <Route path="dialogs/*" element={<DialogsContainer/>}/>
              <Route path="users/*" element={<UsersContainer/>}/>
              <Route path="login/*" element={<Login/>}/>
            </Routes>
          </div>
        </div>
    );}
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, {initializeApp}), withRouter)(App);
