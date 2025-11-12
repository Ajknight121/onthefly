import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './index.css'
import App from './App.jsx'
import { ApiContextProvider } from './apiContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ApiContextProvider>
        <App />
      </ApiContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
