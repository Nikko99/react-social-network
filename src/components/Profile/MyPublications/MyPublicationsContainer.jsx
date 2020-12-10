import React from "react";
import {addPublicationActionCreator, updateNewPublicationActionCreator} from "../../../redux/profileReducer";
import MyPublications from "./MyPublications";

const MyPublicationsContainer = (props) => {

   let state = props.store.getState();

   let addPublication = () => {
      props.store.dispatch(addPublicationActionCreator())
   }

   let onPublicationChange = (text) => {
      props.store.dispatch(updateNewPublicationActionCreator(text))
   }

   return (
      <MyPublications addPublication={addPublication}
                      onPublicationChange={onPublicationChange}
                      newPublicationText={state.profilePage.newPublicationText}
                      publicationsData={state.profilePage.publicationsData}
      />
   )
}

export default MyPublicationsContainer;
