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
   return <div>{props.message}</div>
}

const Dialogs = () => {
   return (
      <div className={s.dialogs_wrapper}>
         <div>
            <DialogsItem name='Akhmed' id='1'/>
            <DialogsItem name='Said' id='2'/>
            <DialogsItem name='Umalat' id='3'/>
         </div>
         <div>
            <MessagesItem message='Hello'/>
            <MessagesItem message='Its me'/>
            <MessagesItem message='isadakdlasdnfajf'/>
         </div>
      </div>
   )
}

export default Dialogs;
