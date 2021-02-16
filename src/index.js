import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Bootstrap from 'bootstrap';

function tick() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);