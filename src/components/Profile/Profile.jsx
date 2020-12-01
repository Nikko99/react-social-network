import React from 'react';
import s from './Profile.module.css';
import Publication from './MyPublications/Publication/Publication';

const Profile = () => {
   return (
      <div>
         <div>
            <img src='https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg' alt=''/>
         </div>

         <div>ava + description</div>

         <div>
            <h3>My publications</h3>
            <div>
               <textarea/>
               <button>Add</button>
            </div>

            <Publication message="It's me" likes='3'/>
            <Publication message='Hello' likes='4'/>
         </div>

      </div>
   )
}

export default Profile;
