import { combineReducers } from "redux";
import sidebarReduser from "./sidebarReduser";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import { configureStore } from "@reduxjs/toolkit";

const redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
});

// const store = legacy_createStore(
//     redusers
// );

const store = configureStore({ reducer: redusers})

export default store;