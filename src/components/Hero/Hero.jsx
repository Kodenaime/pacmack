import React from 'react'
import './hero.css'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
  return (
    <header>
      <Navbar />
      <div className="hero">
        <div className="hero-time">
          1st - 5th Oct 2025, Lagos, Nigeria
        </div>
      </div>
    </header>
  )
}

export default Hero