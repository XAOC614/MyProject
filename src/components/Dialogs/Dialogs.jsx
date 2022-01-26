import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewPostActionCreator } from "../../redux/state";
const Dialogs = (props) => {
let dialogElements = 
props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
let messageElements = 
props.messages.map( m => <Message message={m.message} id={m.id} />)


let newMessageElement = React.createRef();
let addMessage =() =>{
    props.dispatch(addMessageActionCreator());
};
let onMessageChange = () =>{
    let newMessage = newMessageElement.current.value;
    props.dispatch(updateNewPostActionCreator(newMessage));
};

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div ClassName={s.messages}>
                {messageElements}
                <textarea onChange = {onMessageChange} ref={newMessageElement} value={props.message}/>
                <div>
                <button onClick = { addMessage }>add message</button>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;