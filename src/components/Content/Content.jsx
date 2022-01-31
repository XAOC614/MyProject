import React from "react";
import s from './Content.module.css';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Content = (props) => {
    return (<div>
        <ProfileInfo />
        <MyPostsContainer />
    </div>)
};
export default Content;