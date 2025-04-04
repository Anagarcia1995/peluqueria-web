import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import EstudioCabelloPage from './pages/estudioCabelloPage';
import CitaPage from './pages/CitaPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/servicios' element={<ServiciosPage/>}/>
        <Route path='/estudio' element={<EstudioCabelloPage/>}/>
        <Route path='/cita' element={<CitaPage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
