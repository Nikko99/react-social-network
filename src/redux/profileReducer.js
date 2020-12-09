const ADD_POST = 'ADD-POST';
const UPDATE_NEW_PUBLICATION_TEXT = 'UPDATE-NEW-PUBLICATION-TEXT';

const profileReducer = (state, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPublication = {
            id: 5,
            publicationText: state.newPublicationText,
            likesCount: 0
         }
         state.publicationsData.push(newPublication)
         state.newPublicationText = '';
         return state;
      case UPDATE_NEW_PUBLICATION_TEXT:
         state.newPublicationText = action.newText;
         return state;
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

export default profileReducer;
