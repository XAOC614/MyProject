const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'
let initialState = {
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
}
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let newMessage = state.message
            return {
                ...state,
                message: '',
                messages: [...state.messages,{id:6, message: newMessage}]
            }
            // let newMessage = {
            //     id: 6,
            //     message: state.message,
            // };
            // let stateCopy = {...state};
            // stateCopy.messages = [...state.messages];
            // stateCopy.messages.push(newMessage);
            // stateCopy.message = '';
            // return stateCopy
        }
        case UPDATE_NEW_POST_MESSAGE:{
            return {
                ...state,
                message: action.updateMessage
            }
            // let stateCopy = {...state}
            // stateCopy.message = action.updateMessage;
            // return stateCopy
        }
        default:
            return state
    }


}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewPostActionCreator = (newMessage) => ({ type: UPDATE_NEW_POST_MESSAGE, updateMessage: newMessage })
export default messageReducer;