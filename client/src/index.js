import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import $ from "jquery"
const root = ReactDOM.createRoot(document.getElementById('root'));
$(document).ready(()=>{
  sessionStorage.clear()
})
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

