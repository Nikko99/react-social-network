import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import state from './redux/state';
import {addPublication, updateNewPublicationText} from "./redux/state";

export let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App state={state} addPublication={addPublication} updateNewPublicationText={updateNewPublicationText}/>
      </React.StrictMode>,
      document.getElementById('root')
   );
}
