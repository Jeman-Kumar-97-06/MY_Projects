import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { ConvoContextProvider } from './contexts/ConvoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ConvoContextProvider>
        <App />
      </ConvoContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
