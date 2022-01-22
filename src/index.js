import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, subscribe } from './redux/state';
import {updateNewPostText, updateNewMessage} from './redux/state'
import {BrowserRouter, Route} from "react-router-dom";
import { addPost } from './redux/state';
import state from './redux/state';



let renderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App posts={state.profilePage.posts} dialogs={state.messagePage.dialogs} messages={state.messagePage.messages} text={state.profilePage.text} message={state.messagePage.message}
    addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessage={updateNewMessage}/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
}
renderEntireTree(state);
subscribe(renderEntireTree);