import React from "react";
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import MyPostsContainer from "./MyPostsContainer";
const MyPosts = (props) => {
    let postsElements = 
    props.posts.map( p => <Posts message={p.message} id={p.id} key={p.id} likes={p.likes}/>)

    let newPostElement = React.createRef();
    let onAddPost =() => {
        debugger;
        props.addPost();
    };
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (<div className={s.posts}>
        <div>
            <h3>my post</h3>
            <div>
                <textarea onChange={ onPostChange } ref={newPostElement} value={props.text}/>
            </div>
            <div>
                <button onClick={ onAddPost }  >Add Post</button>
            </div>
            <div className={s.post}>
                New post 
                {postsElements}
            </div>
        </div>
    </div>)
};
export default MyPosts;