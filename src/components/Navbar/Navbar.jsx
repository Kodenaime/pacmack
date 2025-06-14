import React, { useState } from 'react';
import './navbar.css';

import logo from '../../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='nav'>
      <nav className='container'>
        <a className="logo" href='/'>
          <img src={logo} alt="Pacmack Logo" />
        </a>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul className={`nav-items ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li className="nav-item"><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
          <li className="nav-item"><a href="#venue" onClick={() => setMenuOpen(false)}>Venue</a></li>
          <li className="nav-item"><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
