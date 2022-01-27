import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'
let store = {
  _state : {
    profilePage : {
       posts : [
           { id: 1, message: 'hello bro', likes:'153'},
           { id: 2, message: 'How are you?', likes:'204'},
           { id: 3, message: 'Good job', likes:'253'},
           { id: 4, message: 'I like you', likes:'187'},
         ],
         text: 'You are beautiful',
    },
     messagePage : {
       messages : [
           { id: 1, message: 'HI'},
           { id: 2, message: 'How are you?'},
           { id: 3, message: 'YO'},
           { id: 4, message: 'YO'},
           { id: 5, message: 'YO'},
         ],
         dialogs : [
           { id: 1, name: 'Andrey'},
           { id: 2, name: 'Sergey'},
           { id: 3, name: 'Sveta'},
           { id: 4, name: 'Valera'},
           { id: 5, name: 'Dimych'},
           { id: 6, name: 'Anna'},
           { id: 7, name: 'Vasya'},
           { id: 8, name: 'Petya'},
         ],
         message: 'Let do this!',
     },
 },
 getState () {
   return this._state;
 },
 _renderEntireTree  () {
  console.log('state is changed');
 },
 subscribe (observer)  {
  this._renderEntireTree = observer;
 },
 dispatch (action) {
  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.messagePage = messageReducer(this._state.messagePage, action);
  
    this._renderEntireTree(this._state);
   
 }
};
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewPostActionCreator = (newMessage) => ({ type: UPDATE_NEW_POST_MESSAGE, updateMessage: newMessage })




  window.store = store;
  export default store;