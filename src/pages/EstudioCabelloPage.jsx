import '../css/general.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router";
import menuIcon from '../img/menu-points.svg'; // Asegúrate de importar la imagen


const EstudioCabelloPage = () => {

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

      <h1>ESTUDIO DE TU CABELLO</h1>
      <h3>Nuestro servicio es individual y personalizado para todas y las personas que nos visitan, para nosotros resulta fundamental poder verte antes de ofrecerte un precio exacto.</h3>
      <h3>En todos nuestros centros disponemos de una zona de diagnóstico en la que nuestro equipo de profesionales podrá realizar un estudio de tu cabello (totalmente gratuito) de este modo podrán asesorarte sobre los tratamientos o servicios que te gustaría realizar con nosotros además de ofrecerte un precio concreto.</h3>
      <h3>Solicita a través de este formulario de contacto una cita para un diagnóstico profesional en el que podamos evaluar el estado de tu cabello en profundidad para ofrecerte los mejores tratamientos en función de tus objetivos.</h3>

      <div>
        <div>      
  <input type="text" placeholder="Nombre" />
        </div>
        <div>      
  <input type="text" placeholder="Apellido" />
        </div>
        <div>
  <input type="text" placeholder="Teléfono" />
        </div>
        <div>
  <input type="text" placeholder="Email" />
        </div>
        <div>
  <input type="text" placeholder="Cuéntanos cómo tienes el cabello y qué te gustaría realizarte" />
        </div>
        <button>Enviar</button>
      </div>

    </div>
  )
}

export default EstudioCabelloPage