import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../pictures/logos/logo_footer.png'; 
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="logo_footer">
      <NavLink exact="true" to="/">
          <img src={logo} alt="Logo Kasa Immobilier" />
        </NavLink>
      </div>
      <div className="copyrights">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
