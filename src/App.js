import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
               <Route path='/profile' render={() =>
                  <Profile store={props.store}/>
               }/>
               <Route path='/im' render={() =>
                  <DialogsContainer store={props.store} state={props.state.dialogsPage}/>
               }/>
               <Route path='/feed' render={() => <News/>}/>
               <Route path='/music' render={() => <Music/>}/>
               <Route path='/settings' render={() => <Settings/>}/>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
