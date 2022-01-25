import React from "react";
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
    let postsElements = 
    props.posts.map( p => <Posts message={p.message} id={p.id} likes={p.likes}/>)

    let newPostElement = React.createRef();
    let addPost =() => {
        props.dispatch({type:'ADD-POST'});
    };
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText : text });
    };

    return (<div className={s.posts}>
        <div>
            <h3>my post</h3>
            <div>
                <textarea onChange={ onPostChange } ref={newPostElement} value={props.text}/>
            </div>
            <div>
                <button onClick={ addPost }  >Add Post</button>
            </div>
            <div className={s.post}>
                New post 
                {postsElements}
            </div>
        </div>
    </div>)
};
export default MyPosts;