import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfileInfo, getProfileStatus, setUserProfile, updateProfileStatus } from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = 13444;
      }
      this.props.getProfileInfo(userId)
      this.props.getProfileStatus(userId)
   }

   render() {
      return <Profile { ...this.props } />
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status
})

export default compose(connect(mapStateToProps, {
   setUserProfile,
   getProfileInfo,
   getProfileStatus,
   updateProfileStatus
}), withRouter)(ProfileContainer)
