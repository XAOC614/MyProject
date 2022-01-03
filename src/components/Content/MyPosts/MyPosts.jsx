import React from "react";
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";
const MyPosts = () => {
    let posts = [
        { id: 1, message: 'hello bro', likes:'153'},
        { id: 2, message: 'How are you?', likes:'204'},
        { id: 3, message: 'Good job', likes:'253'},
        { id: 4, message: 'I like you', likes:'187'},
    ]
    let postsElements = posts.map( p => <Posts message={p.message} id={p.id} likes={p.likes}/>)
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