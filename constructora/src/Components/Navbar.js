import React from 'react';
import '../css/Navbar.css';
import logo from '../images/papasito.jpeg';

const Navbar = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="Logo" className="logo"/>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">¿Quiénes somos?</a></li>
                    <li><a href="#">Servicios</a> </li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Proyectos</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
