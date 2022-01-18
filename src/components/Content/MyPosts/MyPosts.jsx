import React from "react";
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";
const MyPosts = (props) => {
    let postsElements = 
    props.posts.map( p => <Posts message={p.message} id={p.id} likes={p.likes}/>)

    let newPostElement = React.createRef();
    let addPost =() =>{
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    

    return (<div className={s.posts}>
        <div>
            <h3>my post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={ addPost } >Add Post</button>
            </div>
            <div className={s.post}>
                New post 
                {postsElements}
            </div>
        </div>
    </div>)
};
export default MyPosts;