import '@fontsource-variable/caveat/wght.css'
import '@fontsource-variable/plus-jakarta-sans/wght.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
