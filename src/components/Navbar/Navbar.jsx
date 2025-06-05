import React from 'react'
import './navbar.css'

import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className='container'>
        <a className="logo" href='/'>
          <img src={logo} alt="Pacmack Logo" />
        </a>
        <ul className='nav-items'>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#events">Events</a></li>
          <li className="nav-item"><a href="#venue">Venue</a></li>
          <li className="nav-item"><a href="#contact">Contact Us</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar