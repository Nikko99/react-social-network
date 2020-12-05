import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {

   let dialogsElements = props.state.dialogsData.map(d => {
      return <DialogsItem id={d.id} name={d.name}/>
   })

   let messagesElement = props.state.messagesData.map(m => {
      return <MessagesItem messageText={m.messageText}/>
   })

   let newMessageElement = React.createRef();

   let addMessage = () => {
      let text = newMessageElement.current.value;
      alert(text);
   }

   return (
      <div className={s.dialogs}>
         <div>
            {dialogsElements}
         </div>
         <div>
            {messagesElement}
            <textarea ref={newMessageElement}/>
            <button onClick={addMessage}>Add</button>
         </div>
      </div>
   )
}

export default Dialogs;
