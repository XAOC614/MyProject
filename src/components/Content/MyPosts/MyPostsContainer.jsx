import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostActionCreator } from "../../../redux/message-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        text: state.profilePage.text
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
    updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))},
    addPost: () => {dispatch(addPostActionCreator())}
    
    }
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)
export default MyPostsContainer;