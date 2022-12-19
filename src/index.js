import reportWebVitals from './reportWebVitals';


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import store from './redux/store';
import store from './redux/reduxStore'

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    
   root.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
      {/* dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} */}
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state)
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
