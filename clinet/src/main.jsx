import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { ProviderContext } from './components/Provider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <ProviderContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProviderContext>
  </HashRouter>
)