import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { IconSettings } from '@salesforce/design-system-react';
import "../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import "../node_modules/@salesforce/design-system-react/design-system-react.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <IconSettings path='/assets/icons'>
      <App/>
    </IconSettings>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
