const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newText;
         return state;
      case SEND_MESSAGE:
         let newMessage = {
            id: 5,
            messageText: state.newMessageText
         }
         state.messagesData.push(newMessage)
         state.newMessageText = '';
         return state;
      default:
         return state;
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

export default dialogsReducer;
