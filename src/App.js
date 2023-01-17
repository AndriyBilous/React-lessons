import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
// import Profile from "./components/Profile/Profile.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer.jsx";

const App = () => {
  return (

      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper__content">
          <Routes >
            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
            <Route path="/profile/*" element={<ProfileContainer/>}/>
            <Route path="dialogs/*" element={<DialogsContainer/>}/>
            <Route path="users/*" element={<UsersContainer/>}/>
          </Routes>
        </div>
      </div>
  );
};

export default App;
