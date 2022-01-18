 let state ={
     profilePage : {
        posts : [
            { id: 1, message: 'hello bro', likes:'153'},
            { id: 2, message: 'How are you?', likes:'204'},
            { id: 3, message: 'Good job', likes:'253'},
            { id: 4, message: 'I like you', likes:'187'},
          ],
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
      }
  };
 export let addPost = (postMessage) => {
    let newPost = {
      id: 5 ,
      message: postMessage,
      likes: 0
    };

    state.profilePage.posts.push(newPost);
  };

  export default state;