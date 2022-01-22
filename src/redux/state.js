let renderEntireTree = () => {
  console.log('state is changed');
};
let state ={
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
  };
  window.state = state;
 export const addPost = () => {
    let newPost = {
      id: 5 ,
      message: state.profilePage.text,
      likes: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.text ='';
    renderEntireTree(state);
  };

 export const updateNewPostText = (newText) => {
    state.profilePage.text = newText;
    renderEntireTree(state);
  };
  
  export const addMessage = () => {
    let newMessage = {
      id: 6 ,
      message: state.messagePage.message,
      
    };

    state.messagePage.messages.push(newMessage);
    state.messagePage.message ='';
    renderEntireTree(state);
  };
     export const updateNewMessage = (updateMessage) => {
     state.messagePage.message = updateMessage;
     renderEntireTree(state);
     };

     export const subscribe = (observer) => {
       renderEntireTree = observer;
     };
  
  renderEntireTree(state);
  export default state;