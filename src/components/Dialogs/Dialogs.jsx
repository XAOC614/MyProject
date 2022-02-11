import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    debugger;
let dialogElements = 
props.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />)
let messageElements = 
props.messages.map( m => <Message message={m.message} key={m.id} id={m.id} />)


let newMessageElement = React.createRef();
let onAddMessage =() =>{
    props.addMessage();
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
                <button onClick = { onAddMessage }>add message</button>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;