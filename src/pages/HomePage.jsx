import '../css/general.css'
import '../css/home.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router";
import menuIcon from '../img/menu-points.svg'; // Asegúrate de importar la imagen

const HomePage = () => {
    // Estado para controlar si el menú está abierto o cerrado
    const [menuOpen, setMenuOpen] = useState(false);

    let navigate = useNavigate()

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const inicioHandle = () => {
        navigate('/')
    }
    const serviciosHandle = () => {
        navigate('/servicios')
    }
    const estudioHandle = () => {
        navigate('/estudio')
    }
    const citaHandle = () => {
        navigate('/cita')
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

            <div className='description'>
                {/* Sección Quienes somos */}
                <div className='quienes-somos'>
                    <h3>¿Quiénes somos?</h3>
                    <p>Con más de 20 años de experiencia, xxxxx Peluquería y Estética continúa innovando en su apuesta por la calidad, la profesionalidad y el servicio personalizado para satisfacer las necesidades del cliente.</p>
                </div>

                {/* Sección Qué te ofrecemos */}
                <div className='que-te-ofrecemos'>
                    <h3>¿Qué te ofrecemos?</h3>
                    <p>En nuestro salón tendrás un servicio profesional de la mano de María, peluquera y estilista altamente cualificada y conocedora de las técnicas más innovadoras de corte y estilo del cabello.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage
