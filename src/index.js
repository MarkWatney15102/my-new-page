import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';

import 'jquery';
import '@popperjs/core';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);