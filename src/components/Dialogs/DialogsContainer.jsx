import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      isAuth: state.auth.isAuth
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(sendMessageCreator())
      },
      onMessageChange: (text) => {
         dispatch(updateNewMessageCreator(text))
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
