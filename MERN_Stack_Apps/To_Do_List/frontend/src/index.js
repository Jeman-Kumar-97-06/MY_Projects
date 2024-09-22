import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ListContextProvider } from './context/ListContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListContextProvider>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </ListContextProvider>
  </React.StrictMode>
);
