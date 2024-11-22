import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Card } from './MT 6 - Rendering list/Praktek/Racket/Fragments/card'
import DataUsers from './MT 6 - Rendering list/praktek 2/DataUsers'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataUsers />
  </StrictMode>,
)
