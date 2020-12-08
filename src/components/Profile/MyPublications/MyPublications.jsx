import React from "react";
import s from './MyPublications.module.css'
import Publication from "./Publication/Publication";
import {addPublicationActionCreator, updateNewPublicationActionCreator} from "../../../redux/state";

const MyPublications = (props) => {

   let publicationsElements = props.publicationsData.map(p => {
      return (
         <Publication message={p.publicationText} likesCount={p.likesCount}/>
      )
   })

   let newPublicationElement = React.createRef();

   let addPublication = () => {
      // props.addPublication();
      props.dispatch(addPublicationActionCreator())
   }

   let onPublicationChange = () => {
      debugger;
      let text = newPublicationElement.current.value;
      // props.updateNewPublicationText(text);
      props.dispatch(updateNewPublicationActionCreator(text))
   }

   return (
      <div className={s.my_publications}>
         <h3>My publications</h3>

         <div>
            <div>
               <textarea ref={newPublicationElement} onChange={onPublicationChange} value={props.newPublicationText}/>
            </div>
            <div>
               <button onClick={addPublication}>Add</button>
            </div>
         </div>
         {publicationsElements}
      </div>
   )
}

export default MyPublications;
