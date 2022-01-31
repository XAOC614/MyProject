import React from "react";
import { addMessageActionCreator, updateNewPostActionCreator } from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
const DialogsContainer = () => {


    return <StoreContext.Consumer> 
        {
        store => { 
            let state = store.getState();
            let addMessage = () =>{
                store.dispatch(addMessageActionCreator());
            };
            let onMessageChange = (newMessage) =>{
                let newBody = updateNewPostActionCreator(newMessage);
                store.dispatch(newBody);           
            };
               
    return <Dialogs updateNewMessage = {onMessageChange} 
                    addMessage = {addMessage} 
                    message = {state.messagePage.message} 
                    messages = {state.messagePage.messages} 
                    dialogs = {state.messagePage.dialogs}/>
    
    }
}
        </StoreContext.Consumer>
    
};
export default DialogsContainer;