import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PostContextProvider } from './contexts/PostContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { LikesContextProvider } from './contexts/LikesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
    <PostContextProvider>
      <LikesContextProvider>
        <App />
      </LikesContextProvider>
    </PostContextProvider>
  </AuthContextProvider>
  </React.StrictMode>
);
