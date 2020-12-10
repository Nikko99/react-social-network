import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPublicationsContainer from "./MyPublications/MyPublicationsContainer";

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo/>

         <MyPublicationsContainer/>
      </div>
   )
}

export default Profile;
