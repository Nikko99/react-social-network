import React from 'react';
import { sendMessageCreator, updateNewMessageCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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

let authRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)

export default DialogsContainer
