import React from 'react'
import './sponsors.css'

import SectionHead from '../SectionHead'
import sponsor1 from '../../assets/cambridge_logo.webp'
import sponsor2 from '../../assets/google_logo.webp'
import sponsor3 from '../../assets/stanford_logo.webp'

const Sponsors = () => {
  return (
    <section className="sponsors-section" id="sponsors">
      <div className="container sponsors-container">
        <SectionHead
          head="Kingdom Colaborators" 
          title="Sponsors & Partners" 
          body="Grateful for the individuals, churches, and organizations standing with us to make the mission possible." 
          className="topper"
        />

        <div className="sponsors">
          <img src={sponsor1} alt="" />
          <img src={sponsor2} alt="" />
          <img src={sponsor3} alt="" />
          <img src={sponsor1} alt="" />
          <img src={sponsor2} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Sponsors