import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";

const App = (props) => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
               <Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>
               <Route path='/im' render={ () => <DialogsContainer/> }/>
               <Route path='/users' render={ () => <UsersContainer/> }/>
               <Route path='/feed' render={ () => <News/> }/>
               <Route path='/music' render={ () => <Music/> }/>
               <Route path='/settings' render={ () => <Settings/> }/>
               <Route path='/login' render={ () => <Login/> }/>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
