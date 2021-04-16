import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./sass/style.sass";
import "../node_modules/bootstrap/dist/js/bootstrap"
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

