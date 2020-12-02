import React from 'react';
import s from './Profile.module.css';

import MyPublications from "./MyPublications/MyPublications";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
   return (
      <div>
         <ProfileInfo/>

         <MyPublications/>
      </div>
   )
}

export default Profile;
