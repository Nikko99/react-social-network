import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let publicationsData = [
   { id: 1, publicationText: 'It/s me', likesCount: '0' },
   { id: 2, publicationText: 'Hello World', likesCount: '13' },
   { id: 3, publicationText: 'test', likesCount: '1231231231' },
   { id: 3, publicationText: 'privet', likesCount: '0' }
]

let dialogsData = [
   { id: 1, name: 'Akhmed' },
   { id: 2, name: 'Said' },
   { id: 3, name: 'Umalat' },
   { id: 4, name: 'Ramz' }
]

let messagesData = [
   { id: 1, messageText: 'Hello' },
   { id: 2, messageText: 'Its me' },
   { id: 3, messageText: 'isadakdlasdnfajf' },
   { id: 4, messageText: '1234' }
]

ReactDOM.render(
   <React.StrictMode>
      <App publicationsData={publicationsData} dialogsData={dialogsData} messagesData={messagesData}/>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
