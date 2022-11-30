import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (

      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper__content">
          <Routes >
            <Route path="/" element={<Profile/>} />
            <Route path="dialogs/*" element={<Dialogs/>} />
          </Routes>
          {/* <Profile /> */}
          {/* <Dialogs /> */}
        </div>
      </div>
  );
};

export default App;
