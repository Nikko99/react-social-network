import React from "react";
import {addPublicationActionCreator, updateNewPublicationActionCreator} from "../../../redux/profileReducer";
import MyPublications from "./MyPublications";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
   return {
      publicationsData: state.profilePage.publicationsData,
      newPublicationText: state.profilePage.newPublicationText
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPublication: () => {
         dispatch(addPublicationActionCreator())

      },
      onPublicationChange: (text) => {
         dispatch(updateNewPublicationActionCreator(text))
      }
   }
}

const MyPublicationsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPublications)

export default MyPublicationsContainer;
