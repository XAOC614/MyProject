import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";
import store from "./redux/redux-store";
import StoreContext from './StoreContext';


let renderEntireTree = () => {
ReactDOM.render(
  <BrowserRouter>
  <StoreContext.Provider value = {store}>
    <App />
  </StoreContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
}
renderEntireTree(store.getState);
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state)

});