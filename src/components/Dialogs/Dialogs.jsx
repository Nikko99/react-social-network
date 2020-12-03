import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
   return (
      <div className={s.dialogs_item}>
         <NavLink to={'/im/' + props.id} activeClassName={s.activeDialog}>{props.name}</NavLink>
      </div>
   )
}

const MessagesItem = (props) => {
   return <div>{props.messageText}</div>
}

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
      <div className={s.dialogs_wrapper}>
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
