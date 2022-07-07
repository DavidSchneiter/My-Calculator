import React from 'react';
import ReactDOM from 'react-dom/client';
import { CalculatorApp } from './CalculatorApp';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculatorApp />
  </React.StrictMode>
);
