import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
   follow, getUsers,
   setCurrentPage,
   setTotalUsers,
   setUsers,
   toggleFollowingProgress,
   toggleIsFetching,
   unfollow
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }

   onPaginationClick = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber);
      usersAPI.getUsers(pageNumber, this.props.pageSize)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items);
         });
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
                   toggleFollowingProgress={ this.props.toggleFollowingProgress }
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
   setUsers,
   setCurrentPage,
   setTotalUsers,
   toggleIsFetching,
   toggleFollowingProgress,
   getUsers
})(UsersContainer);
