import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPublicationsContainer from "./MyPublications/MyPublicationsContainer";

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo profile={ props.profile }/>

         <MyPublicationsContainer/>
      </div>
   )
}

export default Profile;
