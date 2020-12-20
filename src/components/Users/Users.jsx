import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/image/userPhoto.jpg'
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                           ? <button onClick={ () => {

                              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`, {
                                 withCredentials: true,
                                 headers: {
                                    'API-KEY': 'c07a74ce-d9f1-4617-ac2c-1705814a4941'
                                 }
                              })
                              .then(response => {
                                 if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                 }
                              });

                           } }>Unfollow</button>
                           : <button onClick={ () => {

                              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`, {}, {
                                 withCredentials: true,
                                 headers: {
                                    'API-KEY': 'c07a74ce-d9f1-4617-ac2c-1705814a4941'
                                 }
                              })
                              .then(response => {
                                 if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                 }
                              });

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

export default Users;
