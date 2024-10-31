import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsContextProvider } from './contexts/ProductsContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { CartContextProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
    <AuthContextProvider>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
    </AuthContextProvider>
    </CartContextProvider>  
  </React.StrictMode>
);