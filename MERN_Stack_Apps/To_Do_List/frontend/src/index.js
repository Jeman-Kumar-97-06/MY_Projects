import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ListContextProvider } from './context/ListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListContextProvider>
      <App />
    </ListContextProvider>
  </React.StrictMode>
);
