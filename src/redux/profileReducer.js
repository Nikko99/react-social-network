import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_PUBLICATION_TEXT = 'UPDATE-NEW-PUBLICATION-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
   publicationsData: [
      { id: 1, publicationText: 'Hello World', likesCount: 13 }
   ],
   newPublicationText: 'Hello world',
   profile: null,
   status: ''
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
      case SET_USER_STATUS:
         return {
            ...state,
            status: action.status
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

export const setUserStatus = (status) => {
   return {
      type: SET_USER_STATUS,
      status
   }
}

export const getProfileInfo = (userId) => {
   return (dispatch) => {
      profileAPI.getProfileInfo(userId)
         .then(response => {
            dispatch(setUserProfile(response.data))
         })
   }
}

export const getProfileStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getProfileStatus(userId)
         .then(response => {
            dispatch(setUserStatus(response.data))
         })
   }
}

export const updateProfileStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateProfileStatus(status)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setUserStatus(status))
            }
         })
   }
}

export default profileReducer;
