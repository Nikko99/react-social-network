import { profileAPI } from '../api/api'

const ADD_PUBLICATION = 'ADD_PUBLICATION'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
   publicationsData: [
      { id: 1, publicationText: 'Hello World', likesCount: 13 }
   ],
   profile: null,
   status: ''
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PUBLICATION:
         let newPublication = {
            id: 5,
            publicationText: action.publication,
            likesCount: 0
         }
         return {
            ...state,
            publicationsData: [...state.publicationsData, newPublication]
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

export const addPublicationActionCreator = (publication) => {
   return {
      type: ADD_PUBLICATION,
      publication
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
