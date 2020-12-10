import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

   return (
      <StoreContext.Consumer>
         {
            store => {

               let state = store.getState();

               let sendMessage = () => {
                  store.dispatch(sendMessageCreator())
               }

               let onMessageChange = (text) => {
                  store.dispatch(updateNewMessageCreator(text))
               }
               return (
                  <Dialogs sendMessage={sendMessage}
                           onMessageChange={onMessageChange}
                           state={state.dialogsPage}
                  />
               )
            }
         }
      </StoreContext.Consumer>
   )
}

export default DialogsContainer;
