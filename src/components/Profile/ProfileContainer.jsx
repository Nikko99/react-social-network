import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileInfo, setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router";

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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getProfileInfo })(WithUrlDataContainerComponent);
