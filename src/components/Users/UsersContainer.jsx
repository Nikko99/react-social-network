import React from 'react';
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import axios from "axios";

class UsersContainer extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
         });
   }

   onPaginationClick = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`)
         .then(response => {
            this.props.setUsers(response.data.items);
         });
   }

   render() {
      return <Users totalUsers={ this.props.totalUsers }
                    pageSize={ this.props.pageSize }
                    currentPage={ this.props.currentPage }
                    onPaginationClick={this.onPaginationClick}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
      />
   }

}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
