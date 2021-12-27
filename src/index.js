import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
//! to use bootstrap 5 and also our added customizations import styles.scss
import './styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
