import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthContextProvider} from './contexts/AuthContext';
import {ProductContextProvider} from './contexts/ProductContext';
import {CartContextProvider} from './contexts/CartContext';
import {GoogleOAuthProvider} from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="45807819000-65uksuegefpuak4ijq4mr5b0dn2tsb5f.apps.googleusercontent.com">
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
