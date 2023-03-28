import React from 'react';
import '../css/Navbar.css';
import logo from '../images/papasito.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
    return (
        <div class='navegacion bg-dark'>
            {/* <nav>
                <img src={logo} alt="Logo" className="logo"/>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">¿Quiénes somos?</a></li>
                    <li><a href="#">Servicios</a> </li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Proyectos</a></li>
                </ul>
            </nav> */}

            <div class="container bg-dark">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
       
        <img src={logo} alt="Logo" className="logo"/>
        <span class="fs-4 text-white">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Inicio</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">¿Quiénes somos?</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Proyectos</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Servicios</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Contacto</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Proyectos</a></li>
       
       
      </ul>
    </header>
  </div>
        </div>
    );
}

export default Navbar;
