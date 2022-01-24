import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";
import store from "./redux/state";


let renderEntireTree = () => {
ReactDOM.render(
  <BrowserRouter>
  
    <App state={store.getState()} 
     addPost={store.addPost.bind(store)} 
     updateNewPostText={store.updateNewPostText.bind(store)} addMessage={store.addMessage.bind(store)} updateNewMessage={store.updateNewMessage.bind(store)}/>
  
  </BrowserRouter>,
  document.getElementById('root')
);
}
renderEntireTree(store.getState);
store.subscribe(renderEntireTree);