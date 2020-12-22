import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileInfo, setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router";
import { compose } from "redux";

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 2;
      }
      this.props.getProfileInfo(userId)
   }

   render() {
      return <Profile { ...this.props } profile={ this.props.profile }/>
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile
})

export default compose(connect(mapStateToProps, { setUserProfile, getProfileInfo }), withRouter)(ProfileContainer)
