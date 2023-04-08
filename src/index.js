import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes_ from './routes';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes_ />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
