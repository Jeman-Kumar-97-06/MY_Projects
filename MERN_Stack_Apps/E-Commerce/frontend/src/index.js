import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsContextProvider } from './contexts/ProductsContext';
import { AuthContextProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
    </AuthContextProvider>  
  </React.StrictMode>
);