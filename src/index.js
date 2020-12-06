import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPublication, updateNewPublicationText, subscribe} from "./redux/state";

export let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App state={state} addPublication={addPublication} updateNewPublicationText={updateNewPublicationText}/>
      </React.StrictMode>,
      document.getElementById('root')
   );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
