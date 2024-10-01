import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PostContextProvider } from './contexts/PostContext';
import { AuthContextProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </AuthContextProvider>
  </React.StrictMode>
);
