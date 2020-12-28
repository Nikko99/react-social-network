import React from 'react';
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
   return (
      <header className={ s.header }>
         <img src='https://www.flaticon.com/svg/static/icons/svg/2111/2111615.svg' alt=''/>
         <div className={ s.login }>
            { props.isAuth
               ? <div> { props.login } <button onClick={ props.logout }>Log Out</button> </div>
               : <NavLink to='/login'>Log In</NavLink>
            }
         </div>
      </header>
   )
}

export default Header;
