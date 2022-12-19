import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  // console.log(props.state.profilePage);
//  console.log(props.state.dialogsPage);

  return (

      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper__content">
          <Routes >
          <Route path="/" element={<Profile store={props.store} profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
          <Route path="dialogs/*" element={<DialogsContainer store={props.store}/>} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
