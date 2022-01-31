import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewPostActionCreator } from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
const DialogsContainer = (props) => {
let state = props.store.getState();
let addMessage = () =>{
    props.store.dispatch(addMessageActionCreator());
};
let onMessageChange = (newMessage) =>{
    let newBody = updateNewPostActionCreator(newMessage);
    props.store.dispatch(newBody);
};

    return (<Dialogs updateNewMessage = {onMessageChange} addMessage = {addMessage} 
        message = {state.messagePage.message} messages = {state.messagePage.messages} dialogs = {state.messagePage.dialogs}/>)
};
export default DialogsContainer;