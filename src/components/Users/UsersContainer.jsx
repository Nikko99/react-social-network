import React from 'react';
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsers: state.usersPage.totalUsers,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber));
      },
      setTotalUsers: (totalCount) => {
         dispatch(setTotalUsersAC(totalCount));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
