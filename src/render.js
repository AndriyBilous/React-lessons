import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rerenderEntireTree = (state, addPost = '') => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
      {/* dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} */}
    </BrowserRouter>
  );
}

export default rerenderEntireTree;