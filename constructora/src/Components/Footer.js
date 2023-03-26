import React from 'react';
import '../css/Footer.css'
import logo from '../images/papasito.jpeg';

const Footer = () => {
    return (
        <footer class="pie-de-pagina">
  <div class="contenedor">
    <div class="logo">
      <img src={logo} alt="Logo de la constructora"/>
      <h3>Constructora vergas</h3>
    </div>
    <div class="contacto">
      <h4>Contacto</h4>
      <ul>
        <li>Sede administrativa: Universidad católica de Colombia</li>
        <li>Teléfono: 3109803094</li>
      </ul>
    </div>
    <div class="redes-sociales">
      <h4>Redes Sociales</h4>
      <ul>
        <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        <li><a href="https://wa.me/573109803094"><i class="fa fa-whatsapp"></i></a></li>
        <li><a href="mailto:marcosaurelio@gmail.com"><i class="fa fa-envelope"></i></a></li>
      </ul>
    </div>
    </div>
    <div className="footer-copy">
        <p>Derechos reservados © 2023 | Constructora verga</p>
  </div>
</footer>

    );
}

export default Footer;


