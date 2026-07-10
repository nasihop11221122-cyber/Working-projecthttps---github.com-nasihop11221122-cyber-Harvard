import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import TopDefault from './components/common/TopDefault.jsx'
import { HelmetProvider } from "react-helmet-async";

// Importing global styles for react-toastify notifications
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <TopDefault />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);