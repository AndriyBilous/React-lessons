import React, { lazy } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/Preloader";
// import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation.jsx";
import { withRouter } from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import { initializeApp } from "./redux/appReduser";

import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore'
import { Provider } from 'react-redux';
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const WithSuspenseDialogsContainer = withSuspense(DialogsContainer); 
const WithSuspenseProfileContainer = withSuspense(ProfileContainer);

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
              <Route path="/profile/:userId" element={<WithSuspenseProfileContainer/>}/>
              <Route path="/profile/*" element={<WithSuspenseProfileContainer/>}/>
              <Route path="dialogs/*" element={ <WithSuspenseDialogsContainer/>}/>
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

let AppContainer = compose(connect(mapStateToProps, {initializeApp}), withRouter)(App);

let SamuraiJsApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
  <AppContainer/>
  </Provider>
</BrowserRouter>
}

export default SamuraiJsApp;