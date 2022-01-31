import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer> 
            {
            store => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                };
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action);
                };
                return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    text={state.profilePage.text} />
            }
        }
        </StoreContext.Consumer>
    )
};
export default MyPostsContainer;