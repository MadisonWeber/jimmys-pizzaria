import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css"
import App from './App';
import GlobalContextProvider from './context/globalContext'

ReactDOM.render(

    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  ,
  document.getElementById('root')
);
