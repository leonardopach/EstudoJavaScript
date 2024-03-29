import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Calculator from './main/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1>Calculadora</h1>
    <Calculator />
  </React.StrictMode>
);
