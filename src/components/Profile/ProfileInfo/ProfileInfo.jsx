import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

   if (!props.profile) {
      return <Preloader/>
   }

   return (
      <div className={ s.profile_info }>
         <div>
            <p>{props.profile.fullName}</p>
         </div>
         <div className={ s.avatar }>
            <img src={ props.profile.photos.large } alt=''/>
         </div>

         <div className={ s.description }>
            { props.profile.aboutMe }
         </div>
      </div>
   )
}

export default ProfileInfo;
