import React from 'react'

import './hero.css'
import Navbar from '../Navbar/Navbar'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePeople } from "react-icons/md";
import { FiGift } from "react-icons/fi";

const Hero = () => {
  return (
    <header>
      <Navbar />
      <div className="hero">
        <div className="hero-time">
          <i><IoLocationOutline /> </i> <p>1st - 5th Oct 2025, Lagos, Nigeria</p>
        </div>
        <div className="hero-center">
          <h1>Pan African Conference</h1>
          <div className="for">For</div>
          <div className="hero-content">
            <h2>Missionary and Cross-cultural Kids</h2>
            <p>Empowering the young and adult children of African Christian cross-cultural workers</p>
          </div>
        </div>
        <div className="hero-btn">
          <div className="btn-primary">
            <MdOutlinePeople /> Register now
          </div>
          <div className="btn-trans">
            <FiGift /> Donate
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero