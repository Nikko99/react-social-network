import React from "react";
import s from './MyPublications.module.css'
import Publication from "./Publication/Publication";

const MyPublications = () => {
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

         <Publication message="It's me" likes='3'/>
         <Publication message='Hello' likes='4'/>
      </div>
   )
}

export default MyPublications;
