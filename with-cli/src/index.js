import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Todo from './React_Codes/Todo';
//import RockAndScissor from './React_Codes/RockAndScissor';
import LeapYear from './React_Codes/LeapYearCopy';
//import EscapeRoomGame from './React_Codes/EscapeRoomGame';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LeapYear/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

