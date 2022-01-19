import React from "react";
import s from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Content = (props) => {
    return (<div>
        <ProfileInfo />
        <MyPosts posts={props.posts} text={props.text} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>)
};
export default Content;