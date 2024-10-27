import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.scss'
import AppRouting from './AppRouting.jsx'

createRoot(document.getElementById('root')).render(
  //<App />
  <StrictMode>
    <AppRouting />   
  </StrictMode>,
)
