import React from "react";
import s from './MyPublications.module.css'
import Publication from "./Publication/Publication";

const MyPublications = (props) => {

   let publicationsElements = props.publicationsData.map(p => {
      return (
         <Publication message={p.publicationText} likesCount={p.likesCount}/>
      )
   })

   return (
      <div className={s.my_publications}>
         <h3>My publications</h3>

         <div>
            <div>
               <textarea/>
            </div>
            <div>
               <button>Add</button>
            </div>
         </div>
         {publicationsElements}
      </div>
   )
}

export default MyPublications;
