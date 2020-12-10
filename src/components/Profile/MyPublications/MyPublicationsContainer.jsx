import React from "react";
import {addPublicationActionCreator, updateNewPublicationActionCreator} from "../../../redux/profileReducer";
import MyPublications from "./MyPublications";
import StoreContext from "../../../StoreContext";

const MyPublicationsContainer = () => {
   return (
      <StoreContext.Consumer>
         { store => {
               let state = store.getState();

               let addPublication = () => {
                  store.dispatch(addPublicationActionCreator())
               }

               let onPublicationChange = (text) => {
                  store.dispatch(updateNewPublicationActionCreator(text))
               }

               return (
                  <MyPublications addPublication={addPublication}
                                  onPublicationChange={onPublicationChange}
                                  newPublicationText={state.profilePage.newPublicationText}
                                  publicationsData={state.profilePage.publicationsData}
                  />
               )
            }
         }
      </StoreContext.Consumer>
   )
}

export default MyPublicationsContainer;
