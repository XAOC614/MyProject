import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'hello bro', likes:'153'},
  { id: 2, message: 'How are you?', likes:'204'},
  { id: 3, message: 'Good job', likes:'253'},
  { id: 4, message: 'I like you', likes:'187'},
]
let dialogs = [
  { id: 1, name: 'Andrey'},
  { id: 2, name: 'Sergey'},
  { id: 3, name: 'Sveta'},
  { id: 4, name: 'Valera'},
  { id: 5, name: 'Dimych'},
  { id: 6, name: 'Anna'},
  { id: 7, name: 'Vasya'},
  { id: 8, name: 'Petya'},
]
let messages = [
  { id: 1, message: 'HI'},
  { id: 2, message: 'How are you?'},
  { id: 3, message: 'YO'},
  { id: 4, message: 'YO'},
  { id: 5, message: 'YO'},
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
