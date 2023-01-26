import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer.jsx";

const App = () => {
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
  );
};

export default App;
