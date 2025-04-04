import '../css/general.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router";
import menuIcon from '../img/menu-points.svg'; // Asegúrate de importar la imagen


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
                <h1>Peluquería María</h1>
                
                {/* Contenedor del ícono de hamburguesa */}
                <div className='menu-icon' onClick={toggleMenu}>
                    <img src={menuIcon} alt="Menu" className="menu-img" />
                </div>

                {/* Lista del menú */}
                <div className={`lista-top ${menuOpen ? 'show' : ''}`}>
                    <ul>
                        <li onClick={inicioHandle}>inicio</li>
                        <li onClick={serviciosHandle}>nuestros servicios</li>
                        <li onClick={estudioHandle}>estudio de tu cabello</li>
                        <li onClick={citaHandle}>pide tu cita</li>
                    </ul>
                </div>
            </div>

      <hr />

      <h1>RESERVA TU CITA</h1>

      <p>En nuestro afán por brindarte la mejor experiencia en cuidado y estilo capilar, te ofrecemos la posibilidad de reservar tu cita de manera rápida y sencilla. Nuestro equipo de profesionales altamente capacitados está listo para hacer realidad tus deseos y realzar tu belleza.</p>
      <p>Te esperamos con un ambiente acogedor y moderno, donde la calidad y la atención personalizada son nuestra máxima prioridad.</p>
      <p>No dejes que el tiempo pase, reserva tu cita ahora mismo y déjate consentir por nuestro equipo de profesionales.</p>

      <hr />

      <div>
        <span>Teléfono de contacto </span>
        <span>XXX XXX XXX</span>
      </div>
      <div>
        <span>Localización</span>
        <span>calle xxxx xxx </span>
      </div>

    </div>
  )
}

export default CitaPage