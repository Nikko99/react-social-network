import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/image/userPhoto.jpg'

const Users = (props) => {
   if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            props.setUsers(response.data.items);
         })
   }

   return (
      <div>
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
