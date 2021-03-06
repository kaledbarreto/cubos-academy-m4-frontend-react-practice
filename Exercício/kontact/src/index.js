import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
