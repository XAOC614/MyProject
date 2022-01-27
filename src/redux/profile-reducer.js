const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.text,
                likes: 0
            }
            state.posts.push(newPost)
            state.text = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.text = action.newText
            return state
            default:
                return state
    }
}
    export default profileReducer;