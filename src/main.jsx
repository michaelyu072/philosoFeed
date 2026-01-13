import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PhilosopherProvider } from './contexts/PhilosopherContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhilosopherProvider>
      <App />
    </PhilosopherProvider>
  </React.StrictMode>,
)

