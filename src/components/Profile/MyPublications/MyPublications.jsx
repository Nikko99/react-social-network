import React from "react";
import s from './MyPublications.module.css'
import Publication from "./Publication/Publication";

const MyPublications = () => {

   let publicationsData = [
      { id: 1, publicationText: 'It/s me', likesCount: '0' },
      { id: 2, publicationText: 'Hello World', likesCount: '13' },
   ]

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

         <Publication message={publicationsData[0].publicationText} likesCount={publicationsData[0].likesCount}/>
         <Publication message={publicationsData[1].publicationText} likesCount={publicationsData[1].likesCount}/>
      </div>
   )
}

export default MyPublications;
