import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/app.scss';
import {BrowserRouter, Router} from "react-router-dom";
import {store} from './redux/store';
import {Provider} from "react-redux";


ReactDOM.render(
    //<React.StrictMode>

    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
    </Provider>,
document.getElementById('root')
);


