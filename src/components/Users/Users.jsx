import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/image/userPhoto.jpg'
import { NavLink } from 'react-router-dom';
import { usersAPI } from "../../api/api";

const Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsers / props.pageSize);

   let currentPage = props.currentPage

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (
      <div>
         <div className={ s.pagination }>
            {
               pages.map(p => {
                  if ((p <= currentPage + 3 && p >= currentPage - 3) || p === 1 || p === pages.length) {
                     return <span className={ props.currentPage === p ? s.selected_page : s.pagination_page }
                                  onClick={ () => {
                                     props.onPaginationClick(p)
                                  } }
                                  key={ p }
                     >{ p }</span>
                  }
               })
            }
         </div>
         <div>
            {
               props.users.map(u => {
                  return (
                     <div key={ u.id } className={ s.user_card }>
                        <div>
                           <NavLink to={ '/profile/' + u.id }>
                              <img src={ u.photos.small !== null ? u.photos.small : userPhoto } alt=""/>
                           </NavLink>
                        </div>
                        <div>
                           <p>{ u.name }</p>
                           <p>{ u.status }</p>

                           { u.followed
                              ? <button disabled={ props.followingInProgress.some(id => id === u.id) } onClick={ () => {

                                 props.unfollow(u.id)

                              } }>Unfollow</button>

                              : <button disabled={ props.followingInProgress.some(id => id === u.id) } onClick={ () => {

                                 props.follow(u.id)

                              } }>Follow</button>
                           }
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Users;
