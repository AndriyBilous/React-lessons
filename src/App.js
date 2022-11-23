import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Profile from "./components/Profile/Profile.jsx";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
};

export default App;
