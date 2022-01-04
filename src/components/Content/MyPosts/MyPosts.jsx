import React from "react";
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";
const MyPosts = (props) => {
    let postsElements = 
    props.posts.map( p => <Posts message={p.message} id={p.id} likes={p.likes}/>)
    return (<div className={s.posts}>
        <div>
            <h3>my post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div className={s.post}>
                New post
                {postsElements}
            </div>
        </div>
    </div>)
};
export default MyPosts;