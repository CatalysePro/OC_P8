import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../pictures/logos/logo_header.png'; 
import '../style/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo_header">
        <NavLink exact="true" to="/"> 
          <img src={logo} alt="Logo Kasa Immobilier" />
        </NavLink>
      </div>
      <ul className="navigation">
        <li><NavLink exact="true" to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink></li>
        <li><NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>A propos</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;


