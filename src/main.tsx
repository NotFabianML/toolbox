import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { I18nextProvider } from 'react-i18next'
import i18next from './i18next'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
