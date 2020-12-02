import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
   return (
      <div className={s.profile_info}>
         <div>
            <img src='https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg' alt=''/>
         </div>

         <div className={s.description}>ava + description</div>
      </div>
   )
}

export default ProfileInfo;
