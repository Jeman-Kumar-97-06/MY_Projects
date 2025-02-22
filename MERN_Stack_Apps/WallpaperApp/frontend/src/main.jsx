import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { WallContextProvider } from './contexts/WallContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <WallContextProvider>
        <App /> 
      </WallContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
