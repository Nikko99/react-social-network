import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
   follow,
   getUsers,
   toggleFollowingProgress,
   unfollow
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }

   onPaginationClick = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize)
   }

   render() {
      return (
         <>
            { this.props.isFetching && <Preloader/> }
            <Users totalUsers={ this.props.totalUsers }
                   pageSize={ this.props.pageSize }
                   currentPage={ this.props.currentPage }
                   onPaginationClick={ this.onPaginationClick }
                   users={ this.props.users }
                   unfollow={ this.props.unfollow }
                   follow={ this.props.follow }
                   followingInProgress={ this.props.followingInProgress }
            />
         </>
      )
   }

}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsers: state.usersPage.totalUsers,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress
   }
}

export default connect(mapStateToProps, {
   follow,
   unfollow,
   toggleFollowingProgress,
   getUsers
})(UsersContainer);
