import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/global.css"

createRoot(document.getElementById('root')).render(
  // <StrictMode> --- IGNORE because it is show output multiple times, it is only for development perpose ---
  <App />
  // </StrictMode>,
)
