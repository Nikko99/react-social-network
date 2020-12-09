const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
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
