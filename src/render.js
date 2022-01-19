import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {updateNewPostText} from './redux/state'
import {BrowserRouter, Route} from "react-router-dom";
import { addPost } from './redux/state';


export let renderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App posts={state.profilePage.posts} dialogs={state.messagePage.dialogs} messages={state.messagePage.messages} text={state.profilePage.text} 
    addPost={addPost} updateNewPostText={updateNewPostText}/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
}