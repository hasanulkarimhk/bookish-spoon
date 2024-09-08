import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './assets/components/Header.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    
  </StrictMode>,
)
