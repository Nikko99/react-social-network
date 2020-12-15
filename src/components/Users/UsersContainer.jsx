import React from 'react';
import Users from "./Users";
import { connect } from "react-redux";
import {
   followAC,
   setCurrentPageAC,
   setTotalUsersAC,
   setUsersAC,
   toggleIsFetchingAC,
   unfollowAC
} from "../../redux/usersReducer";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
         });
   }

   onPaginationClick = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
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
      isFetching: state.usersPage.isFetching
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
      },
      toggleIsFetching: (isFetching) => {
         dispatch(toggleIsFetchingAC(isFetching));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
