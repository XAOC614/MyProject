import React from "react";
import { addMessageActionCreator, updateNewPostActionCreator } from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
      dialogs: state.messagePage.dialogs,
      messages: state.messagePage.messages,
      message: state.messagePage.message
  }

};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (newMessage) => {dispatch(updateNewPostActionCreator(newMessage))},
        addMessage: () => {dispatch(addMessageActionCreator())}

    }
};



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);  
export default DialogsContainer;