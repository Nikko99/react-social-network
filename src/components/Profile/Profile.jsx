import React from 'react';
import s from './Profile.module.css';

import MyPublications from "./MyPublications/MyPublications";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo/>

         <MyPublications publicationsData={props.state.publicationsData} addPublication={props.addPublication}/>
      </div>
   )
}

export default Profile;
