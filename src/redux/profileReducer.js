import { usersAPI } from "../api/api";
import { setAuthUserData } from "./authReducer";
import axios from "axios";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_PUBLICATION_TEXT = 'UPDATE-NEW-PUBLICATION-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
   publicationsData: [
      { id: 1, publicationText: 'Hello World', likesCount: 13 }
   ],
   newPublicationText: 'Hello world',
   profile: null
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPublication = {
            id: 5,
            publicationText: state.newPublicationText,
            likesCount: 0
         }
         return {
            ...state,
            publicationsData: [...state.publicationsData, newPublication],
            newPublicationText: ''
         }
      case UPDATE_NEW_PUBLICATION_TEXT:
         return {
            ...state,
            newPublicationText: action.newText
         }
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         }
      default:
         return state;
   }
}

export const addPublicationActionCreator = () => {
   return {
      type: ADD_POST
   }
}

export const updateNewPublicationActionCreator = (text) => {
   return {
      type: UPDATE_NEW_PUBLICATION_TEXT,
      newText: text
   }
}

export const setUserProfile = (profile) => {
   return {
      type: SET_USER_PROFILE,
      profile
   }
}

export const getProfileInfo = (userId) => {
   return (dispatch) => {
      usersAPI.getProfileInfo(userId)
         .then(response => {
            dispatch(setUserProfile(response.data))
         })
   }
}

export default profileReducer;
