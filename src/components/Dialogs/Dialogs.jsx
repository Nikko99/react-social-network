import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = () => {

   let dialogsData = [
      { id: 1, name: 'Akhmed' },
      { id: 2, name: 'Said' },
      { id: 3, name: 'Umalat' }
   ]

   let messagesData = [
      { id: 1, messageText: 'Hello' },
      { id: 2, messageText: 'Its me' },
      { id: 3, messageText: 'isadakdlasdnfajf' }
   ]

   let dialogsElements = dialogsData.map(d => {
      return <DialogsItem id={d.id} name={d.name}/>
   })

   let messagesElement = messagesData.map(m => {
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
