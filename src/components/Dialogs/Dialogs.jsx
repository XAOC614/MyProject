import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
    debugger;
let dialogElements = 
props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
let messageElements = 
props.messages.map( m => <Message message={m.message} id={m.id} />)


let newMessageElement = React.createRef();
let addMessage =() =>{
    props.addMessage();
    debugger;
};
let onMessageChange = () =>{
    let newMessage = newMessageElement.current.value;
    props.updateNewMessage(newMessage);
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