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

   return (
      <div className={s.dialogs_wrapper}>
         <div>
            <DialogsItem  id={dialogsData[0].id} name={dialogsData[0].name}/>
            <DialogsItem  id={dialogsData[1].id} name={dialogsData[1].name}/>
            <DialogsItem  id={dialogsData[2].id} name={dialogsData[2].name}/>
         </div>
         <div>
            <MessagesItem messageText={messagesData[0].messageText}/>
            <MessagesItem messageText={messagesData[1].messageText}/>
            <MessagesItem messageText={messagesData[2].messageText}/>
         </div>
      </div>
   )
}

export default Dialogs;
