import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StyledGlobalStyle from './global/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledGlobalStyle/>
    <App />
  </React.StrictMode>,
)
