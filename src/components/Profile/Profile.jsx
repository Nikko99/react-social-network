import React from 'react';
import s from './Profile.module.css';

import MyPublications from "./MyPublications/MyPublications";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

   let publicationsData = [
      { id: 1, publicationText: 'It/s me', likesCount: '0' },
      { id: 2, publicationText: 'Hello World', likesCount: '13' },
      { id: 3, publicationText: 'test', likesCount: '1231231231' },
   ]

   return (
      <div>
         <ProfileInfo/>

         <MyPublications publicationsData={publicationsData}/>
      </div>
   )
}

export default Profile;
