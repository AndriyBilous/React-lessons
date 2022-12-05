import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';

// const dialogsData = [
//   {id: 1, name: 'Andrey',},
//   {id: 2, name: 'Dmitriy',},
//   {id: 3, name: 'Dariya',},
//   {id: 4, name: 'Anastasiya',},
// ];

// const messagesData = [
//   { id: 1, message: "Hi" },
//   { id: 2, message: "Hello" },
//   { id: 3, message: "Holla" },
//   { id: 4, message: "Good day" },
//   { id: 5, message: "How are you" },
// ];

// const postsData = [
//   {message: "Hi, how are you?", likesCount: "15", id: "1"},
//   {message: "Hi, i'm fine, ty", likesCount: "23", id: "2"}
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <App state={state}/>
    {/* dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
