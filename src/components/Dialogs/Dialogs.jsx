import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import { Redirect } from "react-router";

const Dialogs = (props) => {

   let dialogsElements = props.dialogsPage.dialogsData.map(d => {
      return <DialogsItem id={d.id} name={d.name}/>
   })

   let messagesElement = props.dialogsPage.messagesData.map(m => {
      return <MessagesItem messageText={m.messageText}/>
   })

   let sendMessage = () => {
      props.sendMessage();
   }

   let onMessageChange = (e) => {
      let text = e.target.value;
      props.onMessageChange(text);
   }

   if (!props.isAuth) return <Redirect to='/login' />

   return (
      <div className={s.dialogs}>
         <div>
            {dialogsElements}
         </div>
         <div>
            {messagesElement}
            <div>
               <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}/>
            </div>
            <div>
               <button onClick={sendMessage}>Send</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;
