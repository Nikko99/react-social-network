import React from 'react';
import s from './Profile.module.css';

import MyPublications from "./MyPublications/MyPublications";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo/>

         <MyPublications publicationsData={props.profilePage.publicationsData}
                         newPublicationText={props.profilePage.newPublicationText}
                         dispatch={props.dispatch}/>
      </div>
   )
}

export default Profile;
