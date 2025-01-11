import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StringComponent from './MT 8 - UseState/coba'
import SimpleCalculator from './MT 8 - UseState/soal-usetStae'
import Counter from './MT 8 - UseState/soal-usetStae'
import LoginStatus from './MT 8 - UseState/soal-usetStae'
import SimpleNameList from './MT 9 - UseState (2)/coba'
import UpdateStateWithMap from './MT 9 - UseState (2)/coba'
import ProductList from './MT 9 - UseState (2)/SOAL/soal'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductList/>
  </StrictMode>,
)
