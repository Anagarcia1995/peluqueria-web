import '../css/general.css'
import '../css/servicios.css'
import '../css/estudio.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router";
import menuIcon from '../img/menu-points.svg'; // Asegúrate de importar la imagen


const EstudioCabelloPage = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  let navigate = useNavigate()

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

        <hr />

      <h1 className='title-estudio'>ESTUDIO DE TU CABELLO</h1>
      <h3 className='subtitle-estudio'>Con este método podremos asesorarte sobre los tratamientos o servicios que te gustaría realizarte con nosotros, además de ofrecerte un precio concreto.</h3>
      <h3 className='subtitle-estudio'>Solicita a través de este formulario de contacto una cita para un diagnóstico profesional en el que podamos evaluar el estado de tu cabello en profundidad para ofrecerte los mejores tratamientos en función de tus objetivos.</h3>

      <div className='form'>
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
          <input type="text" placeholder="Cuéntanos cómo tienes el cabello" />
        </div>
        <button className='button-form'>ENVIAR</button>
      </div>

    </div>
  )
}

export default EstudioCabelloPage