const ADD_POST = 'ADD-POST';
const UPDATE_NEW_PUBLICATION_TEXT = 'UPDATE-NEW-PUBLICATION-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
   publicationsData: [
      { id: 1, publicationText: 'it\'s me', likesCount: 0 },
      { id: 2, publicationText: 'Hello World', likesCount: 13 },
      { id: 3, publicationText: 'test', likesCount: 1231231231 },
      { id: 4, publicationText: 'privet', likesCount: 1 }
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

export default profileReducer;
