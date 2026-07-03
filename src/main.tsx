import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { applyTheme, readTheme } from './lib/theme'
import './index.css'
import { ensurePersistentStorage } from "./persist";

applyTheme(readTheme())


// Request durable storage before mounting so local data survives.
void ensurePersistentStorage();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
