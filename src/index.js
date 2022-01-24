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
     addPost={store.addPost} 
     updateNewPostText={store.updateNewPostText} addMessage={store.addMessage} updateNewMessage={store.updateNewMessage}/>
  
  </BrowserRouter>,
  document.getElementById('root')
);
}
renderEntireTree(store.getState);
store.subscribe(renderEntireTree);