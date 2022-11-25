import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Profile from "./components/Profile/Profile.jsx";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className="app-wrapper__content">
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
};

export default App;
