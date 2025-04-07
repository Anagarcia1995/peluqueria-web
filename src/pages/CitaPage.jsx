import '../css/general.css'
import '../css/cita.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router";
import menuIcon from '../img/menu-points.svg'; // Asegúrate de importar la imagen
import phoneIcon from '../img/phone-50.png'; // Ajusta la ruta según tu estructura
import locIcon from '../img/location.png'


const CitaPage = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  let navigate = useNavigate()

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const inicioHandle = () => {
    navigate ('/')
}
const serviciosHandle = () => {
    navigate ('/servicios')
}
const estudioHandle = () => {
    navigate ('/estudio')
}
const citaHandle = () => {
  navigate ('/cita')
}


  return (
    <div>
      <div className='top'>
        <h1>Tú Peluquería </h1>
                
        {/* Contenedor del ícono de hamburguesa */}
        <div className='menu-icon' onClick={toggleMenu}>
            <img src={menuIcon} alt="Menu" className="menu-img" />
        </div>

        {/* Lista del menú */}
        <div className={`lista-top ${menuOpen ? 'show' : ''}`}>
          <ul>
            <li onClick={inicioHandle}>INICIO</li>
            <li onClick={serviciosHandle}>NUESTROS SERVICIOS</li>
            <li onClick={estudioHandle}>ESTUDIO DE TU CABELLO</li>
            <li onClick={citaHandle}>PIDE TU CITA</li>
          </ul>
        </div>
      </div>

      <h1 className='title-cita'>RESERVA TU CITA</h1>

      <div className='info'>
        <div>
          <img src={phoneIcon} className="icono-telefono" />
          <span>Teléfono de contacto: </span>
          <a className='tel-loc' href="tel:XXX-XXX-XXX"> 123 456 789</a>
        </div>

        <div>
          <img src={locIcon} className="icono-telefono" />
          <span>Localización:</span>
          <a className='tel-loc' href="https://www.google.com/maps/place/Distrito+Centro,+M%C3%A1laga/@36.720957,-4.4209295,14z/data=!3m1!4b1!4m6!3m5!1s0xd72f7959d2b253d:0x8548f50830256a62!8m2!3d36.7184187!4d-4.4197803!16s%2Fm%2F0c41tbz?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank"> Centro de Málaga 1</a>
        </div>
      </div>

      <hr />

      <p className='texto-cita'>Te esperamos con un ambiente acogedor y moderno, donde la calidad y la atención personalizada son nuestra máxima prioridad.</p>
      <p className='texto-cita'>No dejes que el tiempo pase, reserva tu cita ahora mismo y déjate consentir por nuestro equipo de profesionales.</p>

    </div>
  )
}

export default CitaPage