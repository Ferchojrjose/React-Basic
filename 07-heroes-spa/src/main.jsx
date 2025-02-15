import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeoresApp } from './HeoresApp'
import { BrowserRouter } from 'react-router' // BrowserRouter es un componente que se encarga de envolver toda la aplicación para que las rutas funcionen correctamente

import './styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeoresApp />
    </BrowserRouter>
  </StrictMode>
)
