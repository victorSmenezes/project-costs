import React from 'react'
import ReactDOM from 'react-dom/client'
import CreateGlobalStyles from './styles/globalStyles'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <CreateGlobalStyles />
  </React.StrictMode>
)
