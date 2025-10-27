import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/animations.css'
import { initScrollProgress, initScrollAnimations } from './utils/scrollProgress'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Initialize scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress()
  initScrollAnimations()
})