import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

   if (props.users.length === 0) {
      props.setUsers([
         {
            id: 1,
            fullName: 'Akhmed',
            userPhoto: 'https://sun9-34.userapi.com/c623116/v623116626/46a18/ULJZYvSsER0.jpg?ava=1',
            followed: true,
            status: 'I/m react developer',
            location: {
               country: 'Russia',
               city: 'Rostov-on-Don'
            }
         },
         {
            id: 2,
            fullName: 'Umalat',
            userPhoto: 'https://sun9-34.userapi.com/c623116/v623116626/46a18/ULJZYvSsER0.jpg?ava=1',
            followed: false,
            status: 'I/m react developer',
            location: {
               country: 'Russia',
               city: 'Rostov-on-Don'
            }
         },
         {
            id: 3,
            fullName: 'Said',
            userPhoto: 'https://sun9-34.userapi.com/c623116/v623116626/46a18/ULJZYvSsER0.jpg?ava=1',
            followed: false,
            status: 'I/m react developer',
            location: {
               country: 'Russia',
               city: 'Karabulak'
            }
         }
      ])
   }

   return (
      <div>
         {
            props.users.map(u => {
               return (
                  <div className={s.user_card}>
                     <div>
                        <img src={u.userPhoto} alt=""/>
                     </div>
                     <div>
                        <p>{u.fullName}</p>
                        <p>{u.status}</p>
                        <p>{u.location.country}, {u.location.city}</p>

                        {u.followed
                           ? <button onClick={ ()=>{props.unfollow(u.id)} }>Unfollow</button>
                           : <button onClick={ ()=>{props.follow(u.id)} }>Follow</button>
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
