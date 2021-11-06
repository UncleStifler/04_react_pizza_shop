import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/app.scss';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    // <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>,


    document.getElementById('root')
);

reportWebVitals();
