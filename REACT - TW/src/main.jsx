import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pages from './MT 4 - Atomic design/pages/pages'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pages/>
  </StrictMode>,
)
