import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { GenContextProvider } from './contexts/GenContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <GenContextProvider>
        <App/>
      </GenContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
