import React from "react";
import s from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Content = (props) => {
    return (<div>
        <ProfileInfo />
        <MyPosts posts={props.posts}/>
    </div>)
};
export default Content;