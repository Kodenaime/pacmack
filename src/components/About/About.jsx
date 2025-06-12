import React from 'react'
import './about.css'

import SectionTop from '../SectionTop'
import flier from '../../assets/flier.png'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about container">
        <div className="about-content">
          <SectionTop 
          head="About PACMACK Conference" 
          title="Empowering the young and adult children of African Christian cross-cultural workers" 
          body="This conference is dedicated to uplifting and equipping the children of African Christian cross-cultural workers. Through inspiring sessions and community-building activities, participants will thrive, gaining tools to navigate their unique journeys. Open to ages 16 and above, fostering a space for growth and connection." 
          className="topper"
        />
        </div>
        <div className="about-image">
          <img src={flier} alt="about image" />
        </div>
      </div>
    </section>
  )
}

export default About

