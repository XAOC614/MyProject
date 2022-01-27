const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE'
const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.message,
            };
            state.messages.push(newMessage);
            state.message = '';
            return state
        case UPDATE_NEW_POST_MESSAGE:
            state.message = action.updateMessage;
            return state
        default:
            return state
    }


}
export default messageReducer;