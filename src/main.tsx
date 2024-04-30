import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import GlobalStyle from './globalStyle.ts'
import { BrowserRouter } from 'react-router-dom'

if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser.js");
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
)
