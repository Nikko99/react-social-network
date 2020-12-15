import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/image/userPhoto.jpg'

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
                        <img src={ u.photos.small !== null ? u.photos.small : userPhoto } alt=""/>
                     </div>
                     <div>
                        <p>{ u.name }</p>
                        <p>{ u.status }</p>

                        { u.followed
                           ? <button onClick={ () => {
                              props.unfollow(u.id)
                           } }>Unfollow</button>
                           : <button onClick={ () => {
                              props.follow(u.id)
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
