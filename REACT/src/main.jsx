import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Test from './MT 1/App.jsx'
import App from './MT 2/app.jsx'
import ParentComponent from './MT 3/app.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParentComponent />
  </StrictMode>,
)
