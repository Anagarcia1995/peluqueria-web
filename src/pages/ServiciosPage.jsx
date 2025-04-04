import '../css/general.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router";
import menuIcon from '../img/menu-points.svg'; // Asegúrate de importar la imagen



const ServiciosPage = () => {

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

      <h1>NUSTROS SERVICIOS</h1>

      <div>
        <h2>COLORES</h2>
        <p>asesoramiento para identificar la coloracion que mejor se adapta a ti, al tono original de tu cabello y al resultado que buscas obtener.</p>
        <button>PIDE TU CITA</button>
      </div>

<hr />
      <div>
        <h2>BALAYAGE</h2>
        <p>tecnica de coloracion francesa, crea un cabello ligeramente aclarado que luce con un aspecto natural con tonos mas claros en las puntas.</p>
        <button>PIDE TU CITA</button>
      </div>

<hr />
      <div>
        <h2>CORTES</h2>
        <p>Te ayudamos a encontrar el corte que resalte tu personalidad y se adapte a la forma de tu rostro y tipo de cabello. Ya sea un corte clásico, moderno o atrevido, nuestro equipo te guiará para que luzcas un look fresco y favorecedor.</p>
        <button>PIDE TU CITA</button>
      </div>

<hr />
      <div>
        <h2>RECOGIDOS</h2>
        <p>Ofrecemos recogidos de pelo modernos y personalizados, adaptados a tu estilo y ocasión. Nuestro equipo utiliza las últimas tendencias y técnicas para garantizar que tu look sea único y perfecto para cualquier evento.</p>
        <button>PIDE TU CITA</button>
      </div>

<hr />
      <div>
        <h2>SERVICIO NOVIA</h2>
        <p>El día de la boda, seguiremos las pautas marcadas en la cita previa para crear un look natural, sofisticado y perfecto para ella.</p>
        <p>Realzaremos su belleza, mostrando su versión más radiante, deslumbrante y segura de sí misma. También ofrecemos servicio de peluquería, única y exclusivamente para novias.</p>
        <button>PIDE TU CITA</button>
      </div>

<hr />
      <div>
        <h2>INVITADAS DE EVENTOS</h2>
        <p>Una boda, una comunión, una cena o cualquier evento es una gran oportunidad para venir a Fernando Peluquería y Estética a disfrutar de un asesoramiento personalizado para encontrar el peinado con el que estar fabulosa para tu evento.</p>
        <button>PIDE TU CITA</button>
      </div>

<hr />
      <div>
        <h2>SERVICIO ESTETICO</h2>
        <p>MAQUILLAJE</p>
        <p>MANICURA</p>
        <p>PEDICURA</p>
        <p>DEPILACION FACIAL</p>
        <button>PIDE TU CITA</button>
      </div>

    </div>
  )
}

export default ServiciosPage