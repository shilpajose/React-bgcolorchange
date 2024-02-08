import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ColorChangeComponent from './ColorChangeComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ColorChangeComponent></ColorChangeComponent>
  </React.StrictMode>,
)