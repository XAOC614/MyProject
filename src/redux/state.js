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
 addPost  () {
  let newPost = {
    id: 5 ,
    message: this._state.profilePage.text,
    likes: 0
  };

  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.text ='';
  this._renderEntireTree(this._state);
 },
 updateNewPostText (newText) {
  this._state.profilePage.text = newText;
  this._renderEntireTree(this._state);
 },
 addMessage () {
  let newMessage = {
    id: 6 ,
    message: this._state.messagePage.message,
    
  };

  this._state.messagePage.messages.push(newMessage);
  this._state.messagePage.message ='';
  this._renderEntireTree(this._state);
 },
 updateNewMessage (updateMessage) {
  this._state.messagePage.message = updateMessage;
  this._renderEntireTree(this._state);
 },
 subscribe (observer)  {
  this._renderEntireTree = observer;
 },
};




  window.store = store;
  export default store;