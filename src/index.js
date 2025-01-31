import './index.css';
import reportWebVitals from './reportWebVitals.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/redux-store';
import MainApp from "./App";



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <MainApp />
);


window.store = store;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
