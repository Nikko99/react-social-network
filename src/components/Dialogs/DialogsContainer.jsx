import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

   let state = props.store.getState();

   let sendMessage = () => {
      props.store.dispatch(sendMessageCreator())
   }

   let onMessageChange = (text) => {
      props.store.dispatch(updateNewMessageCreator(text))
   }

   return (
      <Dialogs sendMessage={sendMessage}
               onMessageChange={onMessageChange}
               state={state.dialogsPage}
      />
   )
}

export default DialogsContainer;
