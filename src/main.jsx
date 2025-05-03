import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // 👈 importe o BrowserRouter

import './styles/main.sass';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}> {/* 👈 necessário para GitHub Pages */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
