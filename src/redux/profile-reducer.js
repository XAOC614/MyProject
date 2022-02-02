const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let inicialState = {
    
        posts : [
            { id: 1, message: 'hello bro', likes:'153'},
            { id: 2, message: 'How are you?', likes:'204'},
            { id: 3, message: 'Good job', likes:'253'},
            { id: 4, message: 'I like you', likes:'187'},
          ],
          text: 'You are beautiful',
     
}
const profileReducer = (state = inicialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = state.text;
            return {
                ...state,
                text: '',
                posts: [...state.posts, {id:5, message: newPost, likes:0 }]
            }
            // let newPost = {
            //     id: 5,
            //     message: state.text,
            //     likes: 0
            // }
            // let stateCopy = {...state}; 
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.text = ''
            // return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                text: action.newText
            }
            // let stateCopy = {...state}
            // stateCopy.text = action.newText
            // return stateCopy
        }
            default:
                return state
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,newText: text})
    export default profileReducer;