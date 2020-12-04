import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {

   let dialogsElements = props.dialogsData.map(d => {
      return <DialogsItem id={d.id} name={d.name}/>
   })

   let messagesElement = props.messagesData.map(m => {
      return <MessagesItem messageText={m.messageText}/>
   })

   return (
      <div className={s.dialogs}>
         <div>
            {dialogsElements}
         </div>
         <div>
            {messagesElement}
         </div>
      </div>
   )
}

export default Dialogs;
