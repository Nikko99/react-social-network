import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/state";

const Dialogs = (props) => {

   let dialogsElements = props.state.dialogsData.map(d => {
      return <DialogsItem id={d.id} name={d.name}/>
   })

   let messagesElement = props.state.messagesData.map(m => {
      return <MessagesItem messageText={m.messageText}/>
   })

   let sendMessage = () => {
      props.dispatch(sendMessageCreator())
   }

   let onMessageChange = (e) => {
      let text = e.target.value;
      props.dispatch(updateNewMessageCreator(text))
   }

   return (
      <div className={s.dialogs}>
         <div>
            {dialogsElements}
         </div>
         <div>
            {messagesElement}
            <div>
               <textarea onChange={onMessageChange} value={props.state.newMessageText}/>
            </div>
            <div>
               <button onClick={sendMessage}>Send</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;
