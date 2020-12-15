import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/image/userPhoto.jpg'

class Users extends React.Component {

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

      let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);

      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }
      let currentPage = this.props.currentPage
      return (
         <div>
            <div className={ s.pagination }>
               {
                  pages.map(p => {
                     if ((p <= currentPage + 3 && p >= currentPage - 3) || p === 1 || p === pages.length) {
                        return <span key={ p }
                                     className={ this.props.currentPage === p ? s.selected_page : s.pagination_page }
                                     onClick={ () => {
                                        this.onPaginationClick(p)
                                     } }>{ p }</span>
                     }
                  })
               }
            </div>
            {
               this.props.users.map(u => {
                  return (
                     <div key={ u.id } className={ s.user_card }>
                        <div>
                           <img src={ u.photos.small !== null ? u.photos.small : userPhoto } alt=""/>
                        </div>
                        <div>
                           <p>{ u.name }</p>
                           <p>{ u.status }</p>

                           { u.followed
                              ? <button onClick={ () => {
                                 this.props.unfollow(u.id)
                              } }>Unfollow</button>
                              : <button onClick={ () => {
                                 this.props.follow(u.id)
                              } }>Follow</button>
                           }
                        </div>
                     </div>
                  )
               })
            }
         </div>
      )
   }

}

export default Users;
