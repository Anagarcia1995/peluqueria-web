import '../css/general.css'
import '../css/servicios.css'
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

  const pideTuCitaHandle = () => {
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


      <h1 className='title-servicios'>NUESTROS SERVICIOS</h1>
<hr />
      <div>
      <div className='container-servicios'>
        <h2 className='subtitle-servicios'>COLORES</h2>
        <p className='texto-servicios'>Asesoramiento para identificar la coloracion que mejor se adapta a ti, al tono original de tu cabello y al resultado que buscas obtener.</p>
        <button className='button-servicios' onClick={pideTuCitaHandle}>PIDE TU CITA</button>
      </div>

<hr />
      <div className='container-servicios'>
        <h2 className='subtitle-servicios'>BALAYAGE</h2>
        <p className='texto-servicios'>Tecnica de coloracion francesa, crea un cabello ligeramente aclarado que luce con un aspecto natural con tonos mas claros en las puntas.</p>
        <button className='button-servicios' onClick={pideTuCitaHandle}>PIDE TU CITA</button>
      </div>

<hr />
      <div className='container-servicios'>
        <h2 className='subtitle-servicios'>CORTES</h2>
        <p className='texto-servicios'>Te ayudamos a encontrar el corte que resalte tu personalidad y se adapte a la forma de tu rostro y tipo de cabello.</p>
        <p className='texto-servicios'>Ya sea un corte clásico, moderno o atrevido, nuestro equipo te guiará para que luzcas un look fresco y favorecedor.</p>
        <button className='button-servicios' onClick={pideTuCitaHandle}>PIDE TU CITA</button>
      </div>

<hr />
      <div className='container-servicios'>
        <h2 className='subtitle-servicios'>RECOGIDOS</h2>
        <p className='texto-servicios'>Ofrecemos recogidos de pelo modernos y personalizados, adaptados a tu estilo y ocasión.</p>
        <p className='texto-servicios'>Nuestro equipo utiliza las últimas tendencias y técnicas para garantizar que tu look sea único y perfecto para cualquier evento.</p>

        <button className='button-servicios' onClick={pideTuCitaHandle}>PIDE TU CITA</button>
      </div>

<hr />
      <div className='container-servicios'>
        <h2 className='subtitle-servicios'>SERVICIO NOVIA</h2>
        <p className='texto-servicios'>El día de la boda, seguiremos las pautas marcadas en la cita previa para crear un look natural, sofisticado y perfecto para ella.</p>
        <p className='texto-servicios'>Realzaremos su belleza, mostrando su versión más radiante, deslumbrante y segura de sí misma. También ofrecemos servicio de peluquería, única y exclusivamente para novias.</p>
        <button className='button-servicios' onClick={pideTuCitaHandle}>PIDE TU CITA</button>
      </div>

<hr />
      <div className='container-servicios'>
        <h2 className='subtitle-servicios'>INVITADAS DE EVENTOS</h2>
        <p className='texto-servicios'>Una boda, una comunión, una cena o cualquier evento es una gran oportunidad para venir a X Peluquería y Estética a disfrutar de un asesoramiento personalizado para encontrar el peinado con el que estar fabulosa para tu evento.</p>
        <button className='button-servicios' onClick={pideTuCitaHandle}>PIDE TU CITA</button>
      </div>

<hr />
      <div className='container-servicios'>
        <h2 className='subtitle-servicios'>SERVICIO ESTETICO</h2>
        <p className='texto-servicios'>MAQUILLAJE</p>
        <p className='texto-servicios'>MANICURA</p>
        <p className='texto-servicios'>PEDICURA</p>
        <p className='texto-servicios'>DEPILACION FACIAL</p>
        <button className='button-servicios' onClick={pideTuCitaHandle}>PIDE TU CITA</button>
      </div>
      </div>



    </div>
  )
}

export default ServiciosPage