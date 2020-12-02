import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
   return (
      <div className={s.dialogs_wrapper}>
         <div className={s.dialogs_list}>
            <div className={s.dialogs_item + ' ' + s.active}>Akhmed</div>
            <div className={s.dialogs_item}>Said</div>
            <div className={s.dialogs_item}>Umalat</div>
         </div>
         <div className={s.messages_list}>
            <div className={s.messages_item}>Hello</div>
            <div className={s.messages_item}>How are you?</div>
            <div className={s.messages_item}>Okay</div>
         </div>
      </div>
   )
}

export default Dialogs;
