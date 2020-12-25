import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

   if (!props.profile) {
      return <Preloader/>
   }

   return (
      <div className={ s.profile_info }>
         <div>
            <p>{ props.profile.fullName }</p>
         </div>
         <div>
            <img src={ props.profile.photos.large } alt=''/>
         </div>
         <ProfileStatus status={ props.status } updateProfileStatus={ props.updateProfileStatus }/>
      </div>
   )
}

export default ProfileInfo
