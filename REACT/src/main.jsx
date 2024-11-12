import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Test from './MT 1 - instalasi/App.jsx'
import ParentComponent from './MT 3 - Props/app.jsx'
import Aplikasi from './MT 3 - Props/praktek.jsx'
import App from './MT 3 - Props/praktek.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Aplikasi/>
  </StrictMode>,
)
