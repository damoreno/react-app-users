import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './commons/styles/index.css'
import App from './ui/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="Prueba props" />
  </StrictMode>,
)
