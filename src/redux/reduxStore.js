import { combineReducers } from "redux";
import sidebarReduser from "./sidebarReduser";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import { configureStore } from "@reduxjs/toolkit";
import usersReduser from "./usersReduser";
import authReduser from "./authReduser";
import {reducer as formReduser} from "redux-form"

const redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReduser
});

// const store = legacy_createStore(
//     redusers
// );

const store = configureStore({ reducer: redusers})

window.store = store;

export default store;