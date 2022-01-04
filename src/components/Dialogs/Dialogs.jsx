import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



let dialogs = [
    { id: 1, name: 'Andrey'},
    { id: 2, name: 'Sergey'},
    { id: 3, name: 'Sveta'},
    { id: 4, name: 'Valera'},
    { id: 5, name: 'Dimych'},
    { id: 6, name: 'Anna'},
    { id: 7, name: 'Vasya'},
    { id: 8, name: 'Petya'},
]
let messages = [
    { id: 1, message: 'HI'},
    { id: 2, message: 'How are you?'},
    { id: 3, message: 'YO'},
    { id: 4, message: 'YO'},
    { id: 5, message: 'YO'},
]
let dialogElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
let messageElements = messages.map( m => <Message message={m.message} id={m.id} />)
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div ClassName={s.messages}>
                {messageElements}   
            </div>
        </div>
    )
}
export default Dialogs;