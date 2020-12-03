import React from "react";
import s from './MyPublications.module.css'
import Publication from "./Publication/Publication";

const MyPublications = () => {

   let publicationsData = [
      { id: 1, publicationText: 'It/s me', likesCount: '0' },
      { id: 2, publicationText: 'Hello World', likesCount: '13' },
      { id: 3, publicationText: 'test', likesCount: '1231231231' },
   ]

   let publicationsElements = publicationsData.map(p => {
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
