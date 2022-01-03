import React from "react";
import s from './Posts.module.css';
const Posts = (props) => {
    return (<div>

        <div className={s.item}>
            < img src='https://www.vokrug.tv/pic/person/d/2/f/6/d2f68a00833e2bb574becedff71d406a.jpeg'/>
            { props.message }
            <div><span>Likes {props.likes } </span></div>
        </div>

    </div>)
};
export default Posts;