import React from "react";
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
   return (
      <div className={s.dialogs_item}>
         <NavLink to={'/im/' + props.id} activeClassName={s.activeDialog}>{props.name}</NavLink>
      </div>
   )
}

export default DialogsItem;
