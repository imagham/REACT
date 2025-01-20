import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './MT 10 - UseEffect/soal'
import CountLogger from './MT 10 - UseEffect/soal'
import TextLogger from './MT 10 - UseEffect/soal'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TextLogger/>
  </StrictMode>,
)
