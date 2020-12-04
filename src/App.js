import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = (props) => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
               <Route path='/profile' render={() => <Profile publicationsData={props.publicationsData}/>}/>
               <Route path='/im' render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
               <Route path='/feed' render={() => <News/>}/>
               <Route path='/music' render={() => <Music/>}/>
               <Route path='/settings' render={() => <Settings/>}/>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
