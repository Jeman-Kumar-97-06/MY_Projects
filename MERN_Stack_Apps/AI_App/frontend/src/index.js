import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { PromptsContextProvider } from './contexts/PromptsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PromptsContextProvider>
        <App />
      </PromptsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
