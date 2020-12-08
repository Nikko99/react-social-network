const ADD_POST = 'ADD-POST';
const UPDATE_NEW_PUBLICATION_TEXT = 'UPDATE-NEW-PUBLICATION-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
   _state: {
      profilePage: {
         publicationsData: [
            { id: 1, publicationText: 'It/s me', likesCount: 0 },
            { id: 2, publicationText: 'Hello World', likesCount: 13 },
            { id: 3, publicationText: 'test', likesCount: 1231231231 },
            { id: 4, publicationText: 'privet', likesCount: 1 }
         ],
         newPublicationText: 'Hello world'
      },
      dialogsPage: {
         dialogsData: [
            { id: 1, name: 'Akhmed' },
            { id: 2, name: 'Said' },
            { id: 3, name: 'Umalat' },
            { id: 4, name: 'Ramz' }
         ],
         messagesData: [
            { id: 1, messageText: 'Hello' },
            { id: 2, messageText: 'Its me' },
            { id: 3, messageText: 'isadakdlasdnfajf' },
            { id: 4, messageText: '1234' }
         ],
         newMessageText: ''
      }
   },
   _callSubscriber() {
      console.log('State changed');
   },

   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      debugger;
      if (action.type === ADD_POST) {
         let newPublication = {
            id: 5,
            publicationText: this._state.profilePage.newPublicationText,
            likesCount: 0
         }
         this._state.profilePage.publicationsData.push(newPublication)
         this._state.profilePage.newPublicationText = '';
         this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_PUBLICATION_TEXT) {
         this._state.profilePage.newPublicationText = action.newText;
         this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
         this._state.dialogsPage.newMessageText = action.newText;
         this._callSubscriber(this._state);
      } else if (action.type === SEND_MESSAGE) {
         let newMessage = {
            id: 5,
            messageText: this._state.dialogsPage.newMessageText
         }
         this._state.dialogsPage.messagesData.push(newMessage)
         this._state.dialogsPage.newMessageText = '';
         this._callSubscriber(this._state);
      }
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

export const sendMessageCreator = () => {
   return {
      type: SEND_MESSAGE
   }
}

export const updateNewMessageCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text
   }
}

export default store;
window.store = store;
